import { useContext, useEffect } from "react";
import { v4 as uuidv4} from 'uuid';
import axios from '../helpers/axios';
import { ClientContext } from "../components/context/ClientContext";
import { AuthContext } from "../components/context/AuthContext";
import UserLogin from '../components/userLogin/userLogin';
import {useRouter} from 'next/router';


const Transaction = () => {
  
        const{isLogin, setisLogin} = useContext(AuthContext); 
        const{transaction, setTransaction} = useContext(ClientContext); 
        const router = useRouter();

            useEffect (async () => {
                const token = localStorage && localStorage.getItem('token');
                token !== null && (setisLogin(true))
                        let res = await axios.get('/request/userRequest', { headers: {
                                    'Authorization': 
                                    token ? `Bearer ${token}`: ''
                                }}).catch(function (error) {
                                        if (error.response) {
                                          // The request was made and the server responded with a status code
                                          // that falls out of the range of 2xx
                                          console.log(error.response.data);
                                          console.log(error.response.status);
                                          console.log(error.response.headers);
                                          error.response.status && (
                                                error.response.status == '500' || '400' && (
                                                  axios.post('/signout'),
                                                  localStorage.clear(),
                                                  setisLogin(false),
                                                 router.replace('/login')
                                                )
                                              )
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
                                        res.data.userRequest  && (
                                            setTransaction([...res.data.userRequest])
                                        ) )
                        
        }, []);


        const getFormattedDate = (dateString) => {
                if (!dateString) {
                  return "";
                }
          
                const date = new Date(dateString);
          
                return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
          };
      
           
    return (isLogin == true ? (<div>
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