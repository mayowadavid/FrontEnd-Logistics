import Link from 'next/link';
import {box, profile, transaction } from "../svg";
import { AuthContext } from '../components/context/AuthContext';
import React, {useContext, useEffect} from 'react';
import UserLogin from '../components/userLogin/userLogin';

const Dashboard = () => {
  const{isLogin, setisLogin} = useContext(AuthContext);

  useEffect (async () => {
    const token = localStorage.getItem('token');
      token !== undefined && (setisLogin(true))
      console.log(token);

}, []);



    return (
      isLogin == true ?
   (<div className="dashboard_wrapper">
     <div className="dashboard_holder">
      <div className="Dashboard">
          <div className="Dashboard-container">
            <Link href="/request">
              <a>
                {box()}
                <h3>Ship Now</h3>
              </a>
            </Link>
        </div>
          <div className="Dashboard-container">
          <Link href="/profile">
              <a>
                {profile()}
                <h3>Profile</h3>
              </a>
            </Link>
          </div>
          <div className="Dashboard-container">
          <Link href="/transaction">
              <a>
                {transaction()}
                <h3>Transaction</h3>
              </a>
            </Link>
          </div>
      </div>
    </div>
   </div>) : <UserLogin />

    )}
    
export default Dashboard;