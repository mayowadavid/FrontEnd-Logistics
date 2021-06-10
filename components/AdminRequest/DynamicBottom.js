import React, { useContext } from "react";
import {RequestContext} from "../../components/context/RequestContext";
import Link from 'next/link';

const DynamicBottom = ()=> {
    const { selector} = useContext(RequestContext);
    return (
        <div className="dynamic-bottom">
        {selector.map(({content, icon, title, id}) => 
           <Link key={id} href={`/${content}`}><a> <div className="side-holder">{icon} {title}</div> </a></Link>
        ) }
</div>
    );
}

export default DynamicBottom;