import { useContext, useState } from "react";
import { v4 as uuidv4} from 'uuid';
import { RequestContext } from "../components/context/RequestContext";
import { AuthContext } from "../components/context/AuthContext";
import SideButton from "../components/AdminRequest/sideButton";
import AdminSignin from "../components/adminLogin/adminSignin";
import BottomButton from "../components/AdminRequest/BottomButton";

const Contact = () => {
       

        const initialState =
        {
        firstName: "",
        phoneNumber: "",
        address: "",
        email: ""
        };
     
    const [contact, setContact] = useState(initialState);
    
    const [contactForm, setContactForm] = useState();
    const [selectAll, setSelectAll] = useState(false);
    const [q, setQ] = useState(""); 
    const [bulk, setBulk] = useState("");
    const [contactOption, setContactOption] = useState([
        {options: "Move-to-trash"},
        {options: " Change status to processing"},
        {options: "Change status to on-hold"},
        {options: "Change status to completed"}
    ])

    const{contacts, setContacts} = useContext(RequestContext); 
    const{isLogin, setisLogin} = useContext(AuthContext);

    useEffect (async () => {
        const token = localStorage.getItem('token');
          token !== null && (setisLogin(true))
          let res = await axios.get('/profile/get', { headers: {
            'Authorization': 
            token ? `Bearer ${token}`: ''
        }}).catch(function (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                  // http.ClientRequest in node.js
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }
                console.log(error.config);
              });
                res && (
                    res.data.user.role == 'admin' && ( setisLogin(true)),
                    setContacts(res.data.profile)
                    )
    
    }, []);

    // change contact
        const handleChange = (e) => {
                if(e){
                    const select = false;
                   const {name, value} = e.target;
                   const newContact = {...contact, select, [name]: value};
                
                   return setContact(newContact);
                }
            }; 

            // search function

            const search =(rows) => {
                const columns = rows[0] && Object.keys(rows[0])
                return rows.filter((row) => 
                columns.some((column) => row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1)
                );
            }

           // submit contact
        
            const handleSubmit = (e) =>{
                e.preventDefault();
             
                setContactForm('');
                const {firstName, email, phoneNumber, address, select} = contact
               return setContacts([...contacts, {firstName, email, phoneNumber, address, select}])
            }
            // make form visible
            const activateForm = () => {
               return  setContactForm('active')
            }
            //change selector
            const changeSelector = (e) => {
                
                   setSelectAll( e.target.checked)
                   contacts.map(({select})=>
                   select = e.target.checked
                   )
                return contacts;
            }
            
        // CREATE contacts
        const createContact = () =>{

              return  (
              <div className="form-wrapper">
                         <form onSubmit={handleSubmit} className="contact-form">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" onChange={handleChange} id="firstName" value={contact.firstName} />
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text" name="phoneNumber"  onChange={handleChange}  id="phoneNumber" value={contact.phoneNumber} />
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" onChange={handleChange}  id="address" value={contact.address} />
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" onChange={handleChange}  id="email" value={contact.email} />
                        <input type="submit" value="submit" />
                </form>
              </div>
             )
        }
        // handle bulk submit
        const handleBulk = (e) => {
            e.preventDefault();
            setBulk(e.target.value);
        }
        
        // handle bulk submit
        const handleBulkSubmit = (e) => {
            e.preventDefault();
            if(bulk === "Move-to-trash"){
                contacts.filter((select)=> 
                    select === true
                )
            }
        }

    
    return ( isLogin == true ? (<>
        <SideButton />
        <BottomButton />
         {contactForm == 'active' ? createContact() : <> </> 
         } 
            <div className="shipping-request"> 
                <div className="create-contact">
                    <div className="add-button">
                            <div ><p onClick={activateForm}>Create New</p></div>
                            <div><input type="text" id="search" name="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="search..."/></div>               
                    </div>
                </div>
                    <div className="all-contact" >
                            <div className="contact-head"> 
                                    <div>                                        
                                            <select onChange={ handleBulk }  name="options">
                                                <option value="bulk-action">Bulk Actions</option>
                                                {
                                                    contactOption.map(({options})=>
                                                        <option value={options}  key={uuidv4()} >{options}</option>  
                                                    )
                                                }
                                            </select>
                                        <input type="submit" onClick={ handleBulkSubmit} />                                        
                                    </div>
                                    <div>
                                        <select>
                                            <option>All dates</option>
                                            <option>Date1</option>
                                            <option>Date2</option>
                                        </select>
                                        <select>
                                            <option>All dates</option>
                                            <option>Date1</option>
                                            <option>Date2</option>
                                        </select>
                                        <input type="submit" value="Filter" />
                                    </div>
                            </div>
                    </div>
                    <table className="contact-body">
                        <thead> 
                             <tr><th><input type="checkbox" onChange={ changeSelector} /></th><th>Name</th><th>Email</th><th>Phone Number</th><th>Address</th></tr>
                        </thead>
                        <tbody>{  
                                             search(contacts).map(({ firstName, email, phoneNumber, address}, i) =>{  
                                        return (<tr key={uuidv4()} ><td><input type="checkbox"   onChange={(e)=> { (contacts[i] = e.target.checked) || setSelectAll(false)}}  /></td><td><div>{firstName ? firstName: '--'}</div></td><td><strong>{email ? email: '--'}</strong></td><td><strong>{phoneNumber? phoneNumber: '--'}</strong></td><td><strong>{address ? address: '--'}</strong></td></tr>)
                                    }
                                  ) }
                        </tbody>
                        <thead> 
                                <tr><th><input type="checkbox" onChange={ changeSelector} /></th><th><strong>Name</strong></th><th><strong>Email</strong></th><th>Phone Number</th><th>Address</th></tr>
                        </thead>
                    </table>
                </div>
        </>): <AdminSignin />
    )
}  
export default Contact;