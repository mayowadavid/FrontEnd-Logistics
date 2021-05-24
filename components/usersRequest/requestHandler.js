import React, {useContext} from 'react';
import { RequestContext } from '../context/RequestContext';
import AddRequest from './addRequest';
import RequestPreview from './requestPreview';



const RequestHandler = () => {

    
    const {count} = useContext(RequestContext);


    return (
        <>
                {count == undefined ?
                    <AddRequest />:
                    <RequestPreview /> 
                }
        </>
    )}
    
export default RequestHandler;