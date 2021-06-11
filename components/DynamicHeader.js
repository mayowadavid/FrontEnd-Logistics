import {useRouter} from 'next/router';
import {Back} from "../svg";
import { AuthContext } from './context/AuthContext';
import React, {useContext} from 'react';
import Link from 'next/link';

const DynamicHeader = () => {
  const {isLogin, handleSignout} = useContext(AuthContext); 

  const router = useRouter();
  let headerName = router.pathname.replace('/', '');

    return (
            <div className="dynamic-header">
                 <div onClick={()=> router.replace('dashboard')} className="back">{Back()}</div>
                <div className="dynamic-name">{headerName}</div> 
                {isLogin? <div className="dynamic-login" onClick={handleSignout}><a> Sign Out</a></div> : <div className="dynamic-login"><Link href="/login"><a> login</a></Link></div>}
            </div>
        
    )
    }
    
    export default DynamicHeader;