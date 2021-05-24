import { v4 as uuidv4} from 'uuid';
import {upload} from "../../svg";
import {RequestContext} from '../context/RequestContext';
import React, {useContext, useState} from 'react';



const AddRequest = () => {

    const {input, handleChange, handleReceiver, handleCheck, permanentImages, handleFormPreview, photoChange, handleRequestUpdate, setCount} = useContext(RequestContext);

    const [statusOption, setStatusOption] = useState([
        {options: "pending"}, 
        {options: "processing"},
        {options: "canceled"},
        {options: "onHold"},
        {options: "completed"}
    ])

    const [action, setAction] = useState()

    const photoSource = () => {
       
        if(permanentImages.length ){
            return(<> {permanentImages.map(({img}) => 
                <img src={img} key={uuidv4()}/>)}
                <label htmlFor="file">
                    <input type="file" multiple name="img" onChange={photoChange} id="file" />
                    {upload()}<h4>Upload Images</h4>
                </label> 
                </>)
        }else{
           return (<label htmlFor="file">
                    <input type="file" multiple name="img" onChange={photoChange} id="file" />
                    {upload()}<h4>Upload Images</h4>
                </label> )
        }
        
    }

    

    const changeStatus = () => {
        return (
            <div className="status-change-wrapper">
                <p><label htmlFor="status">Status</label>
                    <select id="status" onChange={handleChange} value={input.status} name="status"  >
                        {statusOption.map(({options})=>
                            <option value={options} key={uuidv4()}>{options}</option>
                        )}
                    </select></p>
                    <p><label htmlFor="amount">Amount</label>
                        <input id="amount" name="amount" onChange={handleChange} value={input.amount} type="number"/></p>
            </div>
        )
    }

    const {formErrors } = {...input}
    console.log(formErrors);

    return (
          <>
              <div className="photo">
                    {permanentImages ? photoSource() : 
                             <label htmlFor="file">
                             <input type="file" multiple name="img" onChange={photoChange} id="file" />
                                {upload()}<h4>Upload Images</h4>
                            </label>  
                    }
              </div>
              
          <form onSubmit={  input._id ? (e)=> handleRequestUpdate(e, input._id) : (e)=>  handleFormPreview(e) }>
              <div className="sender-container" >
              <h3>Sender Information</h3>
                  <div className="sender">
                  <p>
                    <label htmlFor="senderFirstName">First Name</label>
                    <input type="text" onChange={handleChange  } id="senderFirstName"  name="firstName" value={input.sender.firstName} placeholder="Your name.."/>
                    {formErrors.sender.firstName.length > 0  && (
                        <span className="errorMessage">{formErrors.sender.firstName}</span>
                    )}
                    </p>
                    <p>
                    <label htmlFor="senderPhoneNumber1">Phone Number1</label>
                    <input type="number" id="senderphoneNumber1" onChange={handleChange  } name="phoneNumber1" value={input.sender.phoneNumber1}  placeholder="Your PhoneNumber.."/>
                    {formErrors.sender.phoneNumber1.length > 0  && (
                        <span className="errorMessage">{formErrors.sender.firstName}</span>
                    )}
                    </p>
                    <p>
                    <label htmlFor="senderphoneNumber2">Phone Number 2</label>
                    <input type="number" id="senderphoneNumber2" onChange={handleChange } name="phoneNumber2" value={input.sender.phoneNumber2}  placeholder="Your phoneNumber2.."/>
                    {formErrors.sender.phoneNumber2.length > 0  && (
                        <span className="errorMessage">{formErrors.sender.firstName}</span>
                    )}
                    </p>
                  </div>
              </div>
              <div className="receiver-container">
                 <h3>Receiver Information</h3>
                  <div  className="receiver">
                    <p>
                    <label htmlFor="receiverFirstname">First Name</label>
                    <input type="text" id="receiverFirstname" onChange={handleReceiver} name="firstName" value={input.receiver.firstName} placeholder="Your name.."/>
                    {formErrors.receiver.firstName.length > 0  && (
                        <span className="errorMessage">{formErrors.receiver.firstName}</span>
                    )}
                    </p>
                    <p>
                    <label htmlFor="receiverPhoneNumber1">Phone Number1</label>
                    <input type="number" id="receiverphoneNumber1" onChange={handleReceiver} name="phoneNumber1" value={input.receiver.phoneNumber1} placeholder="Your PhoneNumber.."/>
                    {formErrors.receiver.phoneNumber1.length > 0  && (
                        <span className="errorMessage">{formErrors.receiver.phoneNumber1}</span>
                    )}
                    </p>
                    <p>
                    <label htmlFor="receiverphoneNumber2">Phone Number 2</label>
                    <input type="number" id="receiverphoneNumber2" onChange={handleReceiver} name="phoneNumber2" value={input.receiver.phoneNumber2} placeholder="Your phoneNumber2.."/>
                    {formErrors.receiver.phoneNumber2.length > 0  && (
                        <span className="errorMessage">{formErrors.receiver.phoneNumber2}</span>
                    )}
                    </p>
                  </div>
              </div>
              <div className="others">
                    <p>
                    <label htmlFor="tagName">Tag Name</label>
                    <input type="text" id="tagName" onChange={handleChange} name="tagName" value={input.tagName} placeholder="Tag name.."/>
                    {formErrors.tagName.length > 0  && (
                        <span className="errorMessage">{formErrors.tagName}</span>
                    )}
                    </p>
                    <p>
                    <label htmlFor="Cartons">Number of cartons</label>
                    <input type="number" id="Cartons" onChange={handleChange} name="cartons" value={input.cartons} placeholder="Cartons"/>
                    {formErrors.cartons.length > 0  && (
                        <span className="errorMessage">{formErrors.cartons}</span>
                    )}
                    </p>
                    <p>
                    <label htmlFor="otherItems">Other Items</label>
                    <input type="checkbox" id="otherItems" onChange={handleCheck} name="otherItems" value={input.otherItems} placeholder="otherItems"/>
                    {formErrors.otherItems.length > 0  && (
                        <span className="errorMessage">{formErrors.otherItems}</span>
                    )}
                    </p>
                    <p>
                    <label htmlFor="itemsWorth">Items Worth</label>
                    <input type="text" id="itemsWorth" onChange={handleChange} name="itemsWorth" value={input.itemsWorth} placeholder="itemsWorth"/>
                    {formErrors.itemsWorth.length > 0  && (
                        <span className="errorMessage">{formErrors.itemsWorth}</span>
                    )}
                    </p>
                    <p>
                    <label htmlFor="deliveryLocation">Delivery Locations</label>
                    <input type="text" id="deliveryLocation" onChange={handleChange} name="deliveryLocations" value={input.deliveryLocations}  placeholder="deliveryLocation"/>
                    {formErrors.deliveryLocations.length > 0  && (
                        <span className="errorMessage">{formErrors.deliveryLocations}</span>
                    )}
                    </p>
              </div>
              <div className="descriptions">
                    <p>
                    <label htmlFor="description">Descriptions</label>
                    <textarea cols="40" rows="6" id="descriptions" onChange={handleChange} name="descriptions" value={input.descriptions}  placeholder="descriptions"/>
                    {formErrors.descriptions.length > 0  && (
                        <span className="errorMessage">{formErrors.descriptions}</span>
                    )}
                    </p>
              </div>
              {
                 input._id && changeStatus()
              }

              {
                  input._id ? (<div className="submit" >
                  <input className="submit"  type="submit" value="update"/>
               </div>) :(<div className="submit">
                  <input className="submit"  type="submit" value="preview"/>
               </div>)
              }
          </form>
        </>
    )}
    
export default AddRequest;