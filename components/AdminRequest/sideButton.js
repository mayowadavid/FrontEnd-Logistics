import React, { useContext } from "react";
import {RequestContext} from "../../components/context/RequestContext";
import Link from 'next/link';

const SideButton = () => {
    const { selector} = useContext(RequestContext);

    return (
        <div className="side-button">
                {selector.map(({content, icon, title, id}) => 
                   <Link key={id} href={`/${content}`}><a> <div className="side-holder"><h3>{icon}</h3><h3>{title}</h3></div> </a></Link>
                ) }
        </div>
       
    )}
    
export default SideButton;