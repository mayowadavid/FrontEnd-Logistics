import React, { createContext, useEffect, useState } from 'react';
import axios from '../../helpers/axios';
import {gallery, message, offBack, contact} from "../../svg";
import { requestValidate } from '../validator/validate';
import {useRouter} from 'next/router';
import {store} from '../firebase';

export const RequestContext = createContext();

const RequestContextProvider = (props) =>{
    // const initialState =
    //     {sender: {
    //         firstName: '',
    //         phoneNumber1: '',
    //         phoneNumber2: '' },
    //    receiver: {
    //            firstName: '',
    //            phoneNumber1: '',
    //            phoneNumber2: '' },
    //    cartons: '',
    //    createdAt: '',
    //    deliveryLocations: '',
    //    descriptions: '',
    //    itemsWorth: '',
    //    otherItems: true,
    //    requestImages: [{img: '',
    //                     _id: ''}],
    //     status: '',
    //     tagName: '',
    //     amount: '',
    //     _id: '',
    //     formErrors: {
    //                 sender: {
    //                         firstName: '',
    //                         phoneNumber1: '',
    //                         phoneNumber2: '' },
    //                 receiver: {
    //                         firstName: '',
    //                         phoneNumber1: '',
    //                         phoneNumber2: '' },
    //                 cartons: '',
    //                 createdAt: '',
    //                 deliveryLocations: '',
    //                 descriptions: '',
    //                 itemsWorth: '',
    //                 otherItems: true,
    //                 requestImages: '',
    //                 status: '',
    //                 tagName: '',
    //                 amount: ''
    //                 }
           
    //    };

    const initialState =
        {cartons: "55",
        deliveryLocations: "lagos",
        descriptions: "thank you",
        itemsWorth: "5000",
        receiver: {firstName: "David", phoneNumber1: "07130614615", phoneNumber2: "08130614915"},
        sender: {firstName: "mayowa", phoneNumber1: "08130614615", phoneNumber2: "08140614615"},
        tagName: "chisom",
        otherItems: false,
        _id: undefined,
        formErrors: {
            sender: {
                    firstName: '',
                    phoneNumber1: '',
                    phoneNumber2: '' },
            receiver: {
                    firstName: '',
                    phoneNumber1: '',
                    phoneNumber2: '' },
            cartons: '',
            createdAt: '',
            deliveryLocations: '',
            descriptions: '',
            itemsWorth: '',
            otherItems: true,
            requestImages: '',
            status: '',
            tagName: '',
            amount: '',
            requestImages: [{img: ''}],
            }
        };
    const[input, setInput] = useState(initialState);
    const [contacts, setContacts] = useState([]);
    const [extractedRequest, setExtractedRequest] = useState();
    const [sessionToken, setSessionToken] = useState();
    const [isLogin, setisLogin] = useState(false);
    const[temporaryImage, setTemporaryImage] = useState([]);
    const [requestImages, setRequestImages] = useState([]);
    const [count, setCount] = useState();
    const [form, setForm] = useState();
    const [requestSuccess, setRequestSuccess] = useState(false);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState({});
    const router = useRouter();

    useEffect ( () => {
                if(url == {}){
                    setRequestImages({})
        }else{
            setRequestImages([...requestImages, ...{url}])
        }
                   
    }, [url]);
    


    const handleChange = (e) => {
        if(e){
           const {sender} = {...input};
           const {name, value, id} = e.target;
           const {formErrors} = {...input};
           requestValidate(id, value, formErrors);
           sender[name] = e.target.value;
           const newInput = { ...input, sender, [name]: value };
           return setInput(newInput);
        }
    }; 
   const handleCheck = (e)=>{
    const {name, checked} = e.target;
    const newInput = {...input, [name]: checked};
    return setInput(newInput);
   } 


const photoChange = (e) => {
    e.preventDefault();  
   if(e.target.files){
     let selected = e.target.files[0];
    let types = ['image/jpeg', 'image/png'];
   let fileType = selected !== undefined ? types.includes(selected.type): setError("unsupported image type* accepted image jpg/png");
      let FileSize = "5000000";
     let filteredImageSize= fileType == true ? selected.size < FileSize : setError("file too large *5mb minimum"); 
     let perfectSize = filteredImageSize == true && (URL.createObjectURL(selected)); 
    let restructureUrl = {imageSource: perfectSize}
    perfectSize !== undefined && setTemporaryImage([...temporaryImage, restructureUrl]);
      if(filteredImageSize == true ){
      const storageRef = store.ref(`requestImages/${selected.name}`);
        storageRef.put(selected).on('state_changed', 
        async (snap) => {
          const newPercentage = await (snap.bytesTransferred / snap.totalBytes) * 100;
        await setProgress(newPercentage);
        },  async (err) => {
        await setError(err);
        }, async () => {
          const cloudUrl = await storageRef.getDownloadURL();
          setUrl({cloudUrl});
        });
      }
     URL.revokeObjectURL(selected);   
    }
};
    
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage && localStorage.getItem('token');
        const res = await axios.post('/request/create', input, {
            headers : {'authorization': token ? `Bearer ${token}` : ''}
        }).catch(function (error) {
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
          console.log(res)
          res && (
              res.status == 201 && (
                  console.log(res),
                  setRequestSuccess(true)
              )
          )
    };

    const handleReceiver = (e) => {
            
        if(e){
            const {receiver} = {...input};
            const {name, id, value} = e.target;
            const {formErrors} = {...input};
            requestValidate(id, value, formErrors)
            receiver[name] = e.target.value;
            const newInp = { ...input, receiver };
            return setInput(newInp);
        }
    }; 

    const handleRequestUpdate = async(e, id) => {
        e.preventDefault();
       setInput(...input, requestImages);
        const res = await axios.put('/request/' + id, input);
    }

    const handleFormPreview = (e) => {
        e.preventDefault();
       setInput({...input, requestImages});
        setCount("active");
    }

    console.log(input);



    const selector = [
        {content: "contact" , icon: contact(), title: "Contact", id: 1 },
        {content: "gallery", icon: gallery(), title: "Gallery", id: 2},
        {content: "ShippingRequest", icon: offBack(), title: "Request", id: 3},
        {content: "", icon: message(), title: "Message", id: 4}
    ]


    return (
        <RequestContext.Provider value={{input, error, requestImages, requestSuccess, setRequestSuccess, initialState, setCount, count, setInput, handleChange, handleReceiver, handleCheck, temporaryImage, handleFormSubmit, handleFormPreview, photoChange, selector, setExtractedRequest, extractedRequest, contacts, setContacts, handleRequestUpdate, sessionToken, isLogin, setisLogin}}>
            {props.children}
        </RequestContext.Provider>
    )
}

export default RequestContextProvider;

