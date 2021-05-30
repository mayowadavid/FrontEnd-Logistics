import RequestHandler from "../components/usersRequest/requestHandler";
import { useContext, useState, useEffect } from "react";
import { v4 as uuidv4} from 'uuid';
import Link from 'next/link';
import axios from '../helpers/axios';
import SideButton from "../components/AdminRequest/sideButton";
import { RequestContext } from "../components/context/RequestContext";
import AdminSignin from "../components/adminLogin/adminSignin";
import BottomButton from "../components/AdminRequest/BottomButton";


const ShippingRequest = () => {
  
        const [requestOption, setRequesttOption] = useState([
                {options: "move-to-trash"},
                {options: " Change status to processing"},
                {options: "Change status to on-hold"},
                {options: "Change status to completed"}
            ]);
        
            const{extractedRequest, setExtractedRequest, setCount, input, initialState, setInput, setPermanentImages, sessionToken, isLogin, setisLogin} = useContext(RequestContext);

            const [q, setQ] = useState(""); 

            const [updateShipping, setUpdateShipping] = useState();
            console.log(sessionToken);
            

            useEffect (async () => {
                const token = localStorage && localStorage.getItem('token')
                        let res = await axios.get('/request/get', { headers: {
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
                            setExtractedRequest(res.data.request)
                            )
                        
        }, []);

         const getFormattedDate = (dateString) => {
                if (!dateString) {
                  return "";
                }
          
                const date = new Date(dateString);
          
                return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
          };

        const search =(rows) => {
                const columns = rows[0] && Object.keys(rows[0])
                return rows.filter((row) => 
                columns.some((column) => row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1)
                );
            }

            const newShipping = ()=>{
                    setCount();
                    setInput(initialState);
                    return setUpdateShipping(<RequestHandler />)
            }

            const requestData = async(id) => {
                let res = await axios.get('/request/' + id);
                if(res.status == 201){
                        const {singleRequest} = res.data;
                        setCount('action');
                       return setInput(singleRequest);
                    }
            }
            setisLogin(true);
           
    return (isLogin == true ? (<div>
         <SideButton/>
         <BottomButton />
            <div className="shipping-request">
                   {    updateShipping !== undefined ? updateShipping :
                           <>
                                <div className="create-contact">
                                                <div className="add-button">
                                                        <div onClick={()=> setPermanentImages([])}><Link href="/AdminRequest"><a><p >Create New</p></a></Link></div>
                                                        <div><input type="text" id="search" name="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="search..."/></div>                 
                                                </div>
                                </div>
                                <div className="all-contact" >
                                        <div className="contact-head"> 
                                                <div>
                                                        <select>
                                                                { requestOption.map(({options}) => 
                                                                        <option key={uuidv4()}>{options}</option>
                                                                )}
                                                        </select>
                                                        <input type="submit" value="Apply" />
                                                </div>
                                                <div>
                                                        <select>
                                                        <option>All dates</option>
                                                        <option>Date1</option>
                                                        <option>Date2</option>
                                                        </select>
                                                        <input type="submit" value="Filter" />
                                                </div>
                                        </div>
                                        <div className="contact-header"> 
                                                <div>All|</div><div>Trash |</div><div>Pending Approval|</div><div>On hold|</div><div>Completed|</div><div>Refundeded|</div><div>Cancelled</div>
                                        </div>
                                </div>
                                <table className="contact-body">
                                        <thead> 
                                                <tr><td><input type="checkbox" /></td><td><strong>Name</strong></td><td>Date</td><td>Status</td><td>Total</td></tr>
                                        </thead>
                                        
                                        <tbody>
                                                {
                                                extractedRequest !== undefined && ( extractedRequest.map(({tagName, updatedAt, status, _id, amount})=>
                                                <tr key={uuidv4()} >   
                                                                <td><input type="checkbox" /></td>
                                                                {/* <td onClick={()=> requestData(_id)}><Link  href={`/SingleRequest/?id=${_id}`}><a>{tagName}</a></Link></td> */}
                                                                <td><Link  href={`/EachRequest/${_id}`}><a>{tagName}</a></Link></td>
                                                                <td>{getFormattedDate(updatedAt)}</td>
                                                                <td>{status}</td>
                                                                <td>{amount ? amount : "--"}</td> 
                                                        </tr>
                                                        ))
                                                }
                                        </tbody>
                                        <tfoot> 
                                        <tr> 
                                                <td><input type="checkbox" /></td>
                                                <td><strong>Name</strong></td>
                                                <td>Date</td>
                                                <td><strong>Completed</strong></td>
                                                <td><strong>Total</strong></td>
                                        </tr>
                                        </tfoot>
                                </table>
                    </>
                    }
                </div>
        </div>) : (<AdminSignin />)
    )
}  
export default ShippingRequest;