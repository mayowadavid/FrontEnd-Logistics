import React, { createContext, useState, useEffect } from 'react';
import { profileValidate } from '../validator/validate';
import {auth, store, database} from '../firebase';

export const ClientContext = createContext();

const ClientContextProvider = (props) => {

    const initialState = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '', 
      address: '',
      profileImage: '',
      formErrors: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '', 
        address: ''
      }
    }

    const [profile, setProfile] = useState(initialState);
    const [data, setData] = useState();
    useEffect(()=>{
      auth.onAuthStateChanged(user=>{
        user !== null && database.collection('Profile').doc(user.uid).get().then(doc=>
          setData(doc.data())
        );
      })
    }, [])

    useEffect (() => {
      const data = [];
      auth.onAuthStateChanged(user=>{
              user !== null && database.collection('Requests')
              .where("userId", "==", user.uid)
              .onSnapshot((querySnapshot) => {
                      querySnapshot.forEach((doc) => {
                          // doc.data() is never undefined for query doc snapshots
                          data.push(doc.data())
                      });
                  });
            })
            setTransaction(data);
}, []);
    

    useEffect(()=>{
      const {formErrors} = initialState;
      data !== undefined && setProfile({...data, formErrors})
    }, [data])

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
    const {firstName,
    lastName,
    email,
    phoneNumber, 
    address,
    profileImage}= profile;
    database.collection('Profile').add({firstName,
      lastName,
      email,
      phoneNumber, 
      address,
      profileImage})
  }; 
  

  const handleProfilePreview = (e) => {
    e.preventDefault();
    setProfile({...profile, profileImage});
    setCount('active');
  }



  

  

    return (
        <ClientContext.Provider value={{ transaction, setTransaction, handleProfileChange, handleProfilePreview, handleProfileSubmit, profile, setProfile, setTemporaryImage, temporaryImage, profileDetails, profileImage, setProfileImage, count, setCount}}>
            {props.children}
        </ClientContext.Provider>
    )
}

export default ClientContextProvider;
