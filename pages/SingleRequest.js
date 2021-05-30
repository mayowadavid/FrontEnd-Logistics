import axios from '../helpers/axios';
import {  withRouter } from 'next/router';
import SideButton from '../components/AdminRequest/sideButton';
import RequestHandler from '../components/usersRequest/requestHandler';
import { useContext, useEffect } from "react";
import { RequestContext } from "../components/context/RequestContext";
import {generatePublicUrl} from '../urlConfig';

const SingleRequest = withRouter(({data}) => {

    const{input,  setPermanentImages} = useContext(RequestContext);

useEffect (async () => {
    if(input.requestImages[0].img !== ''){
            const{requestImages} = input;
          let updateUrl=  requestImages.map(({img, _id})=> {
               let changeUrl = generatePublicUrl(img);
               return {img: changeUrl, _id }
            })
            setPermanentImages(updateUrl);
            }
}, []);
    
    return (<div>
        <SideButton />
        <div className="single-request">
        <RequestHandler />
        </div>
    </div>
    )
});


SingleRequest.getInitialProps = async (ctx) => {
    let { query: { id } } = ctx; 
    let res = await axios.get('/request/' + id);
    return res
}

export default SingleRequest;