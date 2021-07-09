import RequestHandler from "../components/usersRequest/requestHandler";
import { useContext, useState, useEffect } from "react";
import { v4 as uuidv4} from 'uuid';
import Link from 'next/link';
import SideButton from "../components/AdminRequest/sideButton";
import { RequestContext } from "../components/context/RequestContext";
import { AuthContext } from "../components/context/AuthContext";
import AdminSignin from "../components/adminLogin/adminSignin";
import BottomButton from "../components/AdminRequest/BottomButton";
import { database } from "../components/firebase";
import DynamicBottom from "../components/AdminRequest/DynamicBottom";


const ShippingRequest = () => {
        const{extractedRequest, setExtractedRequest, setCount, initialState, setInput, setPermanentImages} = useContext(RequestContext);
        const{isAdmin} = useContext(AuthContext);
        const [requestOption, setRequesttOption] = useState([
                {options: "move-to-trash"},
                {options: " Change status to processing"},
                {options: "Change status to on-hold"},
                {options: "Change status to completed"}]);
        const [updateShipping, setUpdateShipping] = useState();
        const [allCheck, setAllCheck]= useState(false);
        useEffect ( () => {
                database.collection('Requests')
                .onSnapshot(snap => {
                let documents = [];
                snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id, select: false});
                });
                setExtractedRequest(documents)
                })
        }, []);

        const [q, setQ] = useState(""); 

        const getFormattedDate = (dateString) => {
                if (dateString !== undefined ) {
                        const date = dateString !== undefined && new Date(dateString.toDate());
                        return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
                } };

        const search =(rows) => {
                const columns = rows[0] && Object.keys(rows[0])
                return rows.filter((row) => 
                columns.some((column) => row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1)
                );}
        const handleAll = (e)=> {
                let {checked} = e.target;
                setAllCheck(checked);
                let data = extractedRequest.map((d) => { 
                        d.select= checked;
                return d
                        }
                )
                setExtractedRequest(data);
        }

        const handleSingle = (e, id) => {
        const{checked} = e.target
        let dataIndex =   extractedRequest.findIndex((x)=> x.id == id);
        let updatedData =  extractedRequest.map((allData, i )=> {
                i == dataIndex && (allData.select = checked)
                return allData
                        });
                setExtractedRequest(updatedData);
        let dynamicEvent = extractedRequest !== undefined && extractedRequest.find((d)=>{
                        return d.select == false
                })
                dynamicEvent !== undefined ? setAllCheck(false) : setAllCheck(true);
        }

        const newShipping = ()=>{
                setCount();
                setInput(initialState);
                return setUpdateShipping(<RequestHandler />)
        }

        const requestData = (id) => {
                
        }
        
        return (isAdmin == true ? (<>
        <SideButton/>
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
                                                <tr><td><input type="checkbox" onChange={handleAll} checked={allCheck}/></td><td><strong>Name</strong></td><td>Date</td><td>Status</td><td>Total</td></tr>
                                        </thead>
                                        
                                        <tbody>
                                                {
                                                extractedRequest !== undefined && ( search(extractedRequest).map(({tagName, createdAt, status, id, amount, select})=>
                                                <tr key={uuidv4()} >   
                                                                <td><input type="checkbox" onChange={(e)=>handleSingle(e, id)} checked={select}/></td>
                                                                <td><Link  href={`/EachRequest/${id}`}><a>{tagName !== undefined ? tagName : "--"}</a></Link></td>
                                                                <td>{getFormattedDate(createdAt)}</td>
                                                                <td>{status}</td>
                                                                <td>{amount !== undefined ?  amount : "--"}</td> 
                                                        </tr>
                                                        ))
                                                }
                                        </tbody>
                                        <tfoot> 
                                        <tr> 
                                                <td><input type="checkbox" onChange={handleAll} checked={allCheck}/></td>
                                                <td><strong>Name</strong></td>
                                                <td>Date</td>
                                                <td><strong>Completed</strong></td>
                                                <td><strong>Total</strong></td>
                                        </tr>
                                        </tfoot>
                                </table>
                                <DynamicBottom />
                                 <BottomButton />
                </>
                }
                </div>
        </>) : (<AdminSignin />))
}  
export default ShippingRequest;