import Link from 'next/link';
import {box, profile, transaction } from "../svg";
import { AuthContext } from '../components/context/AuthContext';
import React, {useContext, useEffect} from 'react';
import UserLogin from '../components/userLogin/userLogin';
import {useRouter} from 'next/router';

const Dashboard = () => {
  const{isLogin} = useContext(AuthContext);
  const router = useRouter();
  
console.log(isLogin);

    return (
      isLogin == true ?
   (<div className="dashboard_wrapper">
     <div className="dashboard_holder">
      <div className="Dashboard">
          <div onClick={()=> router.replace('request')} className="Dashboard-container">
                {box()}
                <h3>Ship Now</h3>
        </div>
          <div onClick={()=> router.replace('profile')} className="Dashboard-container">
                {profile()}
                <h3>Profile</h3>
          </div>
          <div onClick={()=> router.replace('transaction')} className="Dashboard-container">
                {transaction()}
                <h3>Transaction</h3>
          </div>
      </div>
    </div>
   </div>) : <UserLogin />

    )}
    
export default Dashboard;