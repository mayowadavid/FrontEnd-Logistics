import { object } from 'prop-types';
import React, { createContext, useState } from 'react';
import axios from '../../helpers/axios';
import {generatePublicUrl} from '../../urlConfig';
import { profileValidate } from '../validator/validate';

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

    const [profileImage, setProfileImage] = useState()

    const[temporaryImage, setTemporaryImage]= useState();
    const[form, setForm] = useState();
    const [count, setCount] = useState();
    const [transaction, setTransaction] = useState([]);
    

    const handleProfileChange = (e) => {
        e.preventDefault();  
        
        if(e.target.files){
         setProfileImage(e.target.files[0])
          let Format = ['image/jpeg', 'image/png', 'image/gif', 5000000];
         let hold = URL.createObjectURL(e.target.files[0]);
         setTemporaryImage(hold);
         URL.revokeObjectURL(e.target.files[0]);   
      }
  };

  const formValid = formErrors => {
    let valid = true;

    object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false)
    })
  }

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
    let id = profile.id;
    let res = await axios.post('/profile/update', form, { headers: {
      'Authorization': token ? `Bearer ${token}`: ''
  }});
    console.log(res);
    if(res.status == 201){
      const {updatedProfile} = res.data;
      const {profileImage} = updatedProfile;
      let newProfile = generatePublicUrl(profileImage);
     setTemporaryImage(newProfile);
    }
    ;
  }; 

  const handleProfilePreview = (e) => {
    e.preventDefault();
    const {firstName, lastName, email, phoneNumber, address} = {... profile}
    let form = new FormData();
    form.append('profileImage', profileImage)
    form.append('firstName', firstName);
    form.append('email', email);
    form.append('lastName', lastName);
    form.append('phoneNumber',  phoneNumber);
    form.append('address',  address);
    setForm(form);
    setCount('active');
         for(let pair of form.entries()){
          console.log([pair[0]+ ',' + pair[1]])
    }

  }

  

  

    return (
        <ClientContext.Provider value={{transaction, setTransaction, handleProfileChange, handleProfilePreview, handleProfileSubmit, profile, setProfile, setTemporaryImage, temporaryImage, profileDetails, setProfileImage, count, setCount}}>
            {props.children}
        </ClientContext.Provider>
    )
}

export default ClientContextProvider;
