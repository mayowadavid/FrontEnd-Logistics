import { object } from 'prop-types';
import React, { createContext, useState } from 'react';
import axios from '../../helpers/axios';
import {generatePublicUrl} from '../../urlConfig';
import { profileValidate } from '../validator/validate';
import {store} from '../firebase';

export const ClientContext = createContext();

const ClientContextProvider = (props) => {

    const initialState = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '', 
      address: '',
      formErrors: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '', 
        address: ''
      }
    }

    const [profile, setProfile] = useState(initialState);


    // .type !== Format[0] || Format[1] || Format[2]) && (profileImage.size <= Format[2] || profileImage.size <= Format[3])

    const [profileImage, setProfileImage] = useState();
    const[temporaryImage, setTemporaryImage]= useState();
    const [count, setCount] = useState();
    const [transaction, setTransaction] = useState([]);
    const [error, setError] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleProfileChange = (e) => {
        e.preventDefault();  
       if(e.target.files){
         let selected = e.target.files[0];
        let types = ['image/jpeg', 'image/png'];
       let fileType = selected !== undefined ? types.includes(selected.type): setError("unsupported image type* accepted image jpg/png");
          let FileSize = "5000000";
         let filteredImageSize= fileType == true ? selected.size < FileSize : setError("file too large *5mb minimum"); 
         let hold = filteredImageSize == true && (URL.createObjectURL(selected)); 
         hold !== undefined && setTemporaryImage(hold);
          if(filteredImageSize == true ){
          const storageRef = store.ref(`profileimages/${selected.name}`);
            storageRef.put(selected).on('state_changed', 
            async (snap) => {
              const newPercentage = await (snap.bytesTransferred / snap.totalBytes) * 100;
            await setProgress(newPercentage);
            },  async (err) => {
            await setError(err);
            }, async () => {
              const newUrl = await storageRef.getDownloadURL();
            await setProfileImage(newUrl);
            });
          }
         URL.revokeObjectURL(selected);   
        }
  };

  const profileDetails = (e) => {
    e.preventDefault();
   
    const {name, value} = e.target;
    let {formErrors} = {...profile}

    profileValidate(name, value, formErrors);
      return setProfile({...profile,  [name]: value})  
  }

  const handleProfileSubmit = async(e) => {
    e.preventDefault();
    const token = localStorage && localStorage.getItem('token');
    let res = await axios.post('/profile/update', profile, { headers: {
      'Authorization': token ? `Bearer ${token}`: ''
  }});
    if(res.status == 201){
      const {updatedProfile} = res.data;
      const {profileImage} = updatedProfile;
     setTemporaryImage(profileImage);
    }
    ;
  }; 


  const handleProfilePreview = (e) => {
    e.preventDefault();
    let newProfile = {...profile, profileImage}
    setProfile(newProfile);
    setCount('active');
  }



  

  

    return (
        <ClientContext.Provider value={{ transaction, setTransaction, handleProfileChange, handleProfilePreview, handleProfileSubmit, profile, setProfile, setTemporaryImage, temporaryImage, profileDetails, profileImage, setProfileImage, count, setCount}}>
            {props.children}
        </ClientContext.Provider>
    )
}

export default ClientContextProvider;
