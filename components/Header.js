import axios from '../pages/api/axios'
import Link from 'next/link';
import {useRouter} from 'next/router';
import { AuthContext } from './context/AuthContext';
import React, {useContext} from 'react';
const Header = () => {
  const {isLogin, handleSignout} = useContext(AuthContext);    

    return (
            <div className="header">
                 <div className="logo"><Link href="/dashboard"><a>G4 logistics</a></Link></div>
                 {isLogin? <div className="login" onClick={handleSignout}><a> Sign Out</a></div> : <div className="login"><Link href="/login"><a> login</a></Link></div>}
            </div>
        
    )
    }
    
    export default Header;