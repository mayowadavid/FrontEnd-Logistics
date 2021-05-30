import axios from '../pages/api/axios'
import Link from 'next/link';
import {useRouter} from 'next/router';
import { AuthContext } from './context/AuthContext';
import React, {useContext} from 'react';
const Header = () => {
  const {isLogin} = useContext(AuthContext);

  const router = useRouter();
    const signout = async(e) => {
      e.preventDefault();
        const res = await axios.post('/signout').catch(function (error) {
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
        localStorage.clear();
       
        router.replace('/login');
    }

    return (
            <div className="header">
                 <div className="logo"><Link href="/dashboard"><a>G4 logistics</a></Link></div>
                 {isLogin? <div><Link href="/login"><a> login</a></Link></div> :  <div onClick={signout}><a> Sign Out</a></div>}
            </div>
        
    )
    }
    
    export default Header;