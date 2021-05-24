import axios from '../../../helpers/axios';
import SideButton from '../../../components/AdminRequest/sideButton';
import RequestHandler from '../../../components/usersRequest/requestHandler';
import { useContext, useEffect } from "react";
import { RequestContext } from "../../..//components/context/RequestContext";
import {generatePublicUrl} from '../../../urlConfig';
import {useRouter} from 'next/router';

const EachRequest = () => {
        const{input, setInput, setPermanentImages} = useContext(RequestContext);
       const router = useRouter();
       const {id} = router.query;
        
        useEffect ( () => {
                
                input &&(
                        input.requestImages[0].img !== undefined  && (
                                setPermanentImages( input.requestImages.map(({img, _id})=> {
                                        let changeUrl = generatePublicUrl(img);
                                        return {img: changeUrl, _id }
                                     }))
                        )
                )
                
            }, [input]);

            useEffect (async () => {

                if(id !== undefined){
                        console.log(id);
                        let res = await axios.get('admin/request/' + id).catch(function (error) {
                                if (error.response) {
                                  // The request was made and the server responded with a status code
                                  // that falls out of the range of 2xx
                                  console.log(error.response.data);
                                  console.log(error.response.status);
                                  console.log(error.response.headers);
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
                              let formError = {formErrors: {
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
                                amount: ''
                                }}
                                
                                res && (
                                        res.data.singleRequest  && (
                                                setInput({...res.data.singleRequest, ...formError})
                                        ))
                }
               
            }, [id]);
                
            

            console.log(input);
           
return (
        <>
        <SideButton />
        <div className="single-request">
        <RequestHandler />
        </div>
        </>   
)}

export default EachRequest;