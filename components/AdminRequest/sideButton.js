import React, { useContext } from "react";
import {RequestContext} from "../../components/context/RequestContext";
import Link from 'next/link';

const SideButton = () => {
    const { selector} = useContext(RequestContext);

    return (
        <div className="side-button">
                {selector.map(({content, icon, title, id}) => 
                   <Link key={id} href={`/${content}`}><a> <div className="side-holder">{icon} {title}</div> </a></Link>
                ) }
        </div>
       
    )}
    
export default SideButton;