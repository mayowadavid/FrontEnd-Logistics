import ProfileHandler from '../components/profile/profileHandler';
import { AuthContext} from '../components/context/AuthContext';
import { ClientContext } from '../components/context/ClientContext';
import UserLogin from '../components/userLogin/userLogin';
import axios from '../helpers/axios';
import React, { useEffect, useContext} from 'react';
import {generatePublicUrl} from '../urlConfig';
import {useRouter} from 'next/router';

const Profile = () => {

    const{isLogin, setisLogin} = useContext(AuthContext); 
    const{profile, setProfile, setTemporaryImage} = useContext(ClientContext);
    const router = useRouter();
  console.log(isLogin);
    useEffect (async () => {
        const token = localStorage && localStorage.getItem('token');
        console.log(token);
        token !== null && (setisLogin(true))
            let res = await axios.post('profile/create', {}, { headers: {
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
              let formError =  {formErrors: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '', 
                    address: ''
                  }}
                  
                
              res && (
                res.data.profile.userId  && (
                    setProfile({...res.data.profile, ...formError})
                ),
                res.data.profile.profileImage  && (
                  setTemporaryImage(generatePublicUrl(res.data.profile.profileImage))
              )
                )
  
    }, []);

    return ( isLogin == true  ?
          (<>
              <ProfileHandler />
          </>): <UserLogin />
    )}
    
export default Profile;