import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4} from 'uuid';
import { RequestContext } from "../components/context/RequestContext";
import { AuthContext } from "../components/context/AuthContext";
import SideButton from "../components/AdminRequest/sideButton";
import AdminSignin from "../components/adminLogin/adminSignin";
import BottomButton from "../components/AdminRequest/BottomButton";
import DynamicBottom from "../components/AdminRequest/DynamicBottom";
import { auth, database } from "../components/firebase";

const Contact = () => {
    const[contacts, setContacts] = useState([]); 
    const{isAdmin} = useContext(AuthContext);

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
    const [allCheck, setAllCheck]= useState(false);
    const [contactOption, setContactOption] = useState([
        {options: "Move-to-trash"},
        {options: " Change status to processing"},
        {options: "Change status to on-hold"},
        {options: "Change status to completed"}
    ])

    console.log(contacts);
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
          user !== null && database.collection('Profile').onSnapshot(snapshot=>{
              let contactData = [];
              snapshot.forEach(doc=>{
                contactData.push({...doc.data(), id: doc.id, select: false})
              })
              setContacts(contactData);
            })
        })
   }, [])

        // check all data
        const handleAll = (e)=> {
            let {checked} = e.target;
            setAllCheck(checked);
            let data = contacts.map((d) => { 
                    d.select= checked;
            return d
                    }
            )
            setContacts(data);
        }

        //check single data
        const handleSingle = (e, id) => {
        const{checked} = e.target
        let dataIndex =   contacts.findIndex((x)=> x.id == id);
        let updatedData =  contacts.map((allData, i )=> {
            i == dataIndex && (allData.select = checked)
            return allData
                    });
            setContacts(updatedData);
        let dynamicEvent = contacts !== undefined && contacts.find((d)=>{
                    return d.select == false
                    })
            dynamicEvent !== undefined ? setAllCheck(false) : setAllCheck(true);
        }

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

    
    return ( isAdmin == true ? (<>
        <SideButton />
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
                    <div className="table-wrap">
                        <table className="contact-body">
                            <thead> 
                                <tr><th><input type="checkbox" onChange={handleAll} checked={allCheck} /></th><th>Name</th><th>Email</th><th>Phone Number</th><th>Address</th></tr>
                            </thead>
                            <tbody>{  
                                            contacts !== '' && (search(contacts).map(({firstName, email, phoneNumber, address, select, id}) =>{
                                                   
                                            return (<tr key={uuidv4()} ><td><input type="checkbox"   onChange={(e)=>handleSingle(e, id)} checked={select}  /></td><td><div>{firstName ? firstName: '--'}</div></td><td><strong>{email ? email: '--'}</strong></td><td><strong>{phoneNumber? phoneNumber: '--'}</strong></td><td><strong>{address ? address: '--'}</strong></td></tr>)
                                        }
                                    )) }
                            </tbody>
                            <thead> 
                                    <tr><th><input type="checkbox" onChange={handleAll} checked={allCheck} /></th><th><strong>Name</strong></th><th><strong>Email</strong></th><th>Phone Number</th><th>Address</th></tr>
                            </thead>
                        </table>
                    </div>
                    <DynamicBottom/>
                 <BottomButton />
                </div>
        </>): <AdminSignin />
    )
}  
export default Contact;