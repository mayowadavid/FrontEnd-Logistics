import React, { useContext } from "react";
import {RequestContext} from "../../components/context/RequestContext";
import Link from 'next/link';

const BottomButton = ()=> {
    const { selector} = useContext(RequestContext);
    return (
        <div className="bottom-button">
        {selector.map(({content, icon, title, id}) =>
            <Link key={id} href={`/${content}`}><a> <div className="side-holder">{icon} <h2>{title}</h2></div> </a></Link>
        ) }
        <div className="counter">20</div>
        </div>
    );
}

export default BottomButton;