import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4} from 'uuid';
import axios from '../helpers/axios';
import { ClientContext } from "../components/context/ClientContext";
import { AuthContext } from "../components/context/AuthContext";
import UserLogin from '../components/userLogin/userLogin';
import DynamicHeader from "../components/DynamicHeader";
import {auth, database} from "../components/firebase";
import { profile } from "../svg";


const Transaction = () => {
  
        const{isLogin} = useContext(AuthContext); 
        const{transaction} = useContext(ClientContext); 

            


        const getFormattedDate = (dateString) => {
                if (dateString !== undefined ) {
                        const date = dateString !== undefined && new Date(dateString.toDate());
                        return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
                } 
          };
           
    return (isLogin == true ? (<div>
            <DynamicHeader />
            <div className="transaction_table">
                    <div className="transaction_wrapper">
                   {    
                    <table className="transaction_body">
                        <thead> 
                                <tr><td><strong>Name</strong></td><td>Date</td><td>Status</td><td>Id</td><td>Total</td></tr>
                        </thead>
                        
                        <tbody>
                                {
                                   transaction !== [] && ( transaction.map(({tagName, createdAt, status, _id, amount})=>
                                   <tr key={uuidv4()} >   
                                                  <td>{tagName}</td>
                                                  <td>{getFormattedDate(createdAt)}</td>
                                                  <td>{status}</td>
                                                  <td>{_id}</td>
                                                  <td>{amount ? amount : "--"}</td> 
                                        </tr>
                                        ))
                                }
                        </tbody>
                        <tfoot> 
                        <tr> 
                                <td><strong>Name</strong></td>
                                <td>Date</td>
                                <td>Status</td>
                                <td><strong>Id</strong></td>
                                <td><strong>Total</strong></td>
                        </tr>
                        </tfoot>
                    </table>
                    }
                    </div>
                </div>
        </div>) : ( <UserLogin />)
    )
}  
export default Transaction;