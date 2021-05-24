import React, { createContext, useEffect, useState } from 'react';
import axios from '../../helpers/axios';
import {generatePublicUrl} from '../../urlConfig';
import {gallery, message, offBack, contact} from "../../svg";
import { requestValidate } from '../validator/validate';
import {useRouter} from 'next/router';

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
            requestImages: [{img: '',
                                _id: ''}],
            }
        };
    const[input, setInput] = useState(initialState);
    const [contacts, setContacts] = useState([]);
    const [extractedRequest, setExtractedRequest] = useState();
    const [sessionToken, setSessionToken] = useState();
    const [isLogin, setisLogin] = useState(false);
    const[permanentImages, setPermanentImages] = useState([]);
    const [requestImages, setRequestImage] = useState();
    const [count, setCount] = useState();
    const [form, setForm] = useState();
    const [requestSuccess, setRequestSuccess] = useState(false);
    const router = useRouter();
   
    console.log(permanentImages);

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
              setRequestImage(e.target.files);
               let Format = ['image/jpeg', 'image/png', 'image/gif', 5000000];
              let filterUrl = Array.from(e.target.files).filter(x=> (x.type == Format[0] || x.type == Format[1]) && (x.size <= Format[2] || x.size <= Format[3]) );
              
                let sourceUrl = filterUrl && filterUrl.map((file)=> URL.createObjectURL(file));
                let mapUrl = sourceUrl.map(url => {
                    // let generate = generatePublicUrl(url);
                    let img = url
                    return {img }}
                    )
            if(mapUrl !== []){
                let updatedPermanentImage = [...permanentImages, ...mapUrl ]
                setPermanentImages(updatedPermanentImage);
            }else{
                setPermanentImages(sourceUrl);
            }
            
            URL.revokeObjectURL(e.target.files); 
      } 
    }
    
    const handleFormSubmit = async(e) => {
        e.preventDefault();
        const token = localStorage && localStorage.getItem('token');
        const res = await axios.post('/request/create', form, {
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
    }

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
        let form = new FormData();
        if(requestImages !== undefined){

            for( let img of requestImages){
                form.append('requestImages', img)
            }                                                   
       }
            const {cartons, deliveryLocations, descriptions, itemsWorth, otherItems, tagName, receiver, sender, status, amount } = {...input}
                form.append('cartons', cartons);
                form.append('deliveryLocations', deliveryLocations);
                form.append('descriptions', descriptions);
                form.append('itemsWorth', itemsWorth);
                form.append('otherItems',  otherItems); 
                form.append('tagName',  tagName); 
                form.append('receiver[firstName]',  receiver.firstName);
                form.append('receiver[phoneNumber1]',  receiver.phoneNumber1);
                form.append('receiver[phoneNumber2]',  receiver.phoneNumber2);
                form.append('sender[firstName]',  sender.firstName);
                form.append('sender[phoneNumber1]',  sender.phoneNumber1);
                form.append('sender[phoneNumber2]',  sender.phoneNumber1); 
               
                 input._id && form.append('status', status);
                 input._id && form.append('amount', amount);
                setForm(form);

                for(let pair of form.entries()){
                    console.log([pair[0]+ ',' + pair[1]])
              }
        const res = await axios.put('/request/' + id, form);
    }

    const handleFormPreview = (e) => {
        e.preventDefault();
        let form = new FormData();
        if(requestImages !== undefined){

            for( let img of requestImages){
                form.append('requestImages', img)
            }                                                   
       }
            const {cartons, deliveryLocations, descriptions, itemsWorth, otherItems, tagName, receiver, sender, status, amount } = {...input}
                form.append('cartons', cartons);
                form.append('deliveryLocations', deliveryLocations);
                form.append('descriptions', descriptions);
                form.append('itemsWorth', itemsWorth);
                form.append('otherItems',  otherItems); 
                form.append('tagName',  tagName); 
                form.append('receiver[firstName]',  receiver.firstName);
                form.append('receiver[phoneNumber1]',  receiver.phoneNumber1);
                form.append('receiver[phoneNumber2]',  receiver.phoneNumber2);
                form.append('sender[firstName]',  sender.firstName);
                form.append('sender[phoneNumber1]',  sender.phoneNumber1);
                form.append('sender[phoneNumber2]',  sender.phoneNumber1); 
               
                 input._id && form.append('status', status);
                 input._id && form.append('amount', amount);


                setForm(form);

                for(let pair of form.entries()){
                    console.log([pair[0]+ ',' + pair[1]])
              }
        setCount("active");
    }

    



    const selector = [
        {content: "contact" , icon: contact(), title: "Contact", id: 1 },
        {content: "gallery", icon: gallery(), title: "Gallery", id: 2},
        {content: "ShippingRequest", icon: offBack(), title: "Request", id: 3},
        {content: "", icon: message(), title: "Message", id: 4}
    ]


    return (
        <RequestContext.Provider value={{input, requestSuccess, setRequestSuccess, initialState, setCount, count, setInput, handleChange, handleReceiver, handleCheck, permanentImages, setPermanentImages, handleFormSubmit, handleFormPreview, photoChange, selector, setExtractedRequest, extractedRequest, contacts, setContacts, handleRequestUpdate, sessionToken, isLogin, setisLogin}}>
            {props.children}
        </RequestContext.Provider>
    )
}

export default RequestContextProvider;

