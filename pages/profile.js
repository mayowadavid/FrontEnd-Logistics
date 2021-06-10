import ProfileHandler from '../components/profile/profileHandler';
import { AuthContext} from '../components/context/AuthContext';
import UserLogin from '../components/userLogin/userLogin';
import React, { useContext} from 'react';
import DynamicHeader from '../components/DynamicHeader';


const Profile = () => {

    const{isLogin} = useContext(AuthContext); 
   
    return ( isLogin == true  ?
          (<>
             <DynamicHeader />
              <ProfileHandler />
          </>): <UserLogin />
    )}
    
export default Profile;