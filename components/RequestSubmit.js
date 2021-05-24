import {useRouter} from 'next/router';
import { useContext, useEffect } from 'react';
import {checkMark, close } from "../svg";
import { RequestContext } from './context/RequestContext';
const RequestSubmit = () => {
        const router = useRouter();
        const back = () => {
            setRequestSuccess(false);
            return router.replace('dashboard')
        }
        const { setRequestSuccess}= useContext(RequestContext);
return (
        <div className="request_wrapper">
                 <div className="request_submitted">
                        <div className="success">
                            <p><span>Success</span></p>
                            <p onClick={()=> back()}>{close()}</p>
                        </div>
                        <div className="checked"> { checkMark()}</div>
                        <div className="request_text">
                            <p>Your Request has been submitted successfully</p>
                            <p>An admin will contact you shortly, check your transaction page to know the status of your request</p>
                        </div>
                        <div className="request_submit" onClick={ ()=> back()}><span>Done</span></div>
                    </div> 
        </div>
         
)}

export default RequestSubmit;