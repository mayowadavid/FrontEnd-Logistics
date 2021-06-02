import React, {useContext, useState} from 'react';
import RequestHandler from '../components/usersRequest/requestHandler';
import RequestSubmit from '../components/RequestSubmit';
import { RequestContext } from '../components/context/RequestContext';
import DynamicHeader from '../components/DynamicHeader';



const Request = () => {
    const {requestSuccess} = useContext(RequestContext);

    return (<>
        <DynamicHeader />
    { requestSuccess && (
            <RequestSubmit />
        )}
        <div  className="user-request">
                <RequestHandler />
        </div>
        </>
    )}
    
export default Request;