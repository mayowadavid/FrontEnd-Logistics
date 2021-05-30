import React, {useContext, useState} from 'react';
import RequestHandler from '../components/usersRequest/requestHandler';
import RequestSubmit from '../components/RequestSubmit';
import { RequestContext } from '../components/context/RequestContext';
import {useRouter} from 'next/router';
import {Back} from "../svg";


const Request = () => {
    const {requestSuccess} = useContext(RequestContext);
    const router = useRouter();
    return (<>
    <div onClick={()=> router.back()} className="back">
                    {Back()}
            </div>
    { requestSuccess && (
            <RequestSubmit />
        )}
        <div  className="user-request">
                <RequestHandler />
        </div>
        </>
    )}
    
export default Request;