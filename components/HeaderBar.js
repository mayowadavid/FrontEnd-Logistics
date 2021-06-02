import Link from 'next/link';
import { AuthContext } from './context/AuthContext';
import React, {useContext} from 'react';
const HeaderBar = () => {
  const {isLogin} = useContext(AuthContext);

    return (
            <div className="header-bar">
                 <div className="logo"><Link href="/dashboard"><a>G4 logistics</a></Link></div>
                 {isLogin? <div><Link href="/login"><a> login</a></Link></div> :  <div><a> Sign Out</a></div>}
            </div>
        
    )
    }
    
    export default HeaderBar;