import {RequestContext} from './context/RequestContext';
import { useContext } from "react";
import { v4 as uuidv4} from 'uuid';

export default function SimpleSlider() {
  
  const {requestImages} = useContext(RequestContext);
  return (
    <div className="slider-container">
          {requestImages[0] !== undefined && (requestImages.map(({cloudUrl})=>(
            <div className="request-slider">
                    <img src={cloudUrl} key={uuidv4()} />
                    </div>)
                    ))}
    </div>
  );
}