import { v4 as uuidv4} from 'uuid';
import {RequestContext} from '../context/RequestContext';
import React, {useContext} from 'react';
import SimpleSlider from '../slider';



const RequestPreview = () => {

    const {input, setCount, handleFormSubmit} = useContext(RequestContext);
   

  
    return (
            <>
                <SimpleSlider /> 
                <form onSubmit={input._id == undefined ?  handleFormSubmit : ()=> setCount()}>
    
                <div className="request-preview">
                    <div className="sender-container" >
                    <h3>Sender information</h3>
                        <div className="sender">
                        <p>{input.senderFirstName}</p>
                            <p>{input.senderPhoneNumber1}</p>
                        <p>{input.senderPhoneNumber2}</p>
                        </div>
                    </div>
                    <div className="receiver-container">
                        <h3>Receiver information</h3>
                        <div  className="receiver">
                        <p>{input.receiverFirstName}</p>
                        <p>{input.receiverPhoneNumber1}</p>
                        <p>{input.receiverPhoneNumber2}</p>
                        </div>
                    </div>
                    <div className="others">
                        <p>{input.tagName}</p>
                        <p>{input.cartons}</p>
                        <p>{input.otherItems}</p>
                        <p>{input.itemsWorth}</p>
                        <p>{input.deliveryLocations}</p>
                        <p>{input.descriptions}</p>
                        <p>{input.status}</p> 
                        <p>{input.amount}</p>
                    </div>  
                </div>
                   { input._id ? (<div className="submit">
                        <input className="submit"  type="submit" value="Edit"/>
                    </div>): (<div className="submit">
                        <input className="submit"  type="submit" value="Submit"/>
                    </div>) }
                </form>
                
            </>
    )}
    
export default RequestPreview;