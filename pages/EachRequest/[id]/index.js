import axios from '../../../helpers/axios';
import SideButton from '../../../components/AdminRequest/sideButton';
import RequestHandler from '../../../components/usersRequest/requestHandler';
import { useContext, useEffect } from "react";
import { RequestContext } from "../../..//components/context/RequestContext";
import {useRouter} from 'next/router';
import BottomButton from '../../../components/AdminRequest/BottomButton';
import { database } from '../../../components/firebase';
import DynamicBottom from '../../../components/AdminRequest/DynamicBottom';

const EachRequest = () => {
        const{input, setInput,  setRequestImages} = useContext(RequestContext);
       const router = useRouter();
       const {id} = router.query;
        const {formErrors, requestImages} = input;

            useEffect (async () => {
                if(id){
                database.collection('Requests')
                .doc(id)
                .onSnapshot(snap => {
                    setInput({...snap.data(), formErrors})
                })
                }
               
            }, [id]);
            
            useEffect (async () => {
                setRequestImages(requestImages);  
            }, [input]);
                
           
return (
        <>
        <SideButton />
        <BottomButton />
        <div className="single-request">
        <RequestHandler />
        </div>
        <DynamicBottom />
        </>   
)}

export default EachRequest;