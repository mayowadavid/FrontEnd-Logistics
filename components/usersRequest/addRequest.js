import { v4 as uuidv4} from 'uuid';
import {upload, Loader} from "../../svg";
import {RequestContext} from '../context/RequestContext';
import React, {useContext, useEffect, useState} from 'react';







const AddRequest = () => {
   
    const {input, error, loading, handleChange, handleCheck, temporaryImage, requestImages, handleFormPreview, photoChange, handleRequestUpdate, setCount} = useContext(RequestContext);

    const [statusOption, setStatusOption] = useState([
        {options: "pending"}, 
        {options: "processing"},
        {options: "canceled"},
        {options: "onHold"},
        {options: "completed"}
    ])

    
    
    // const photoSource = () => {
    //     const {requestImages} = input;
    //     console.log(requestImages.cloudUrl);
    //     <>
    //         {requestImages.cloudUrl !== undefined && (requestImages.map(cloudUrl=>
    //             <img src={cloudUrl} key={uuidv4()} />
    //             ))}
    //             {loading == false ? 
    //             <div className="add-image"> 
    //                     {Loader()}<h4>Uploading...</h4>
    //             </div>: 
    //             <div className="add-image">
    //                 <label htmlFor="file">
    //                     <input type="file" name="img" onChange={photoChange} id="file" />
    //                     {upload()}<h4>Upload Images</h4>
    //                 </label> 
    //             </div>}
    //     </>
    //     // if(requestImages == [] ){
    //     //     return(<>
    //     //         {temporaryImage.map(({imageSource}) => 
    //     //     <img src={imageSource} key={uuidv4()} />
    //     //     ) }
    //     //          <div className="add-image">
    //     //     <label htmlFor="file">
    //     //         <input type="file" name="img" onChange={photoChange} id="file" />
    //     //         {upload()}<h4>Upload Images</h4>
    //     //     </label> 
    //     // </div></> )
    //     // }else{
    //     //    return (<> {requestImages.map(({cloudUrl}) => 
    //     //    <img src={cloudUrl} key={uuidv4()} />
    //     //    ) }
    //     //        <div className="add-image">
    //     //            <label htmlFor="file">
    //     //                <input type="file" name="img" onChange={photoChange} id="file" />
    //     //                {upload()}<h4>Upload Images</h4>
    //     //            </label> 
    //     //        </div>
    //     //        </>)
    //     // }
        
    // }

    

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
        
    return (
          <>
              <div className="photo">
              {requestImages[0] !== undefined && (requestImages.map(({cloudUrl})=>(
                <img src={cloudUrl} key={uuidv4()} />)
                ))}
                {loading == false ? 
                <div className="add-image">
                    <label htmlFor="file">
                        <input type="file" name="img" onChange={photoChange} id="file"  accept="/.jpg, .png, gif" />
                        {upload()}<h4>Upload Images</h4>
                    </label> 
                 </div>:
                <div className="add-image"> 
                        {Loader()}<h4>Uploading...</h4>
                </div>
                }
              </div>
              
          <form onSubmit={  input._id ? (e)=> handleRequestUpdate(e, input._id) : (e)=>  handleFormPreview(e) }>
              <div className="sender-container" >
              <h3>Sender Information</h3>
                  <div className="sender">
                  <p>
                    <label htmlFor="senderFirstName">First Name</label>
                    <input type="text" onChange={handleChange  } id="senderFirstName"  name="senderFirstName" value={input.senderFirstName} placeholder="Your name.."/>
                    {formErrors.senderFirstName.length > 0  && (
                        <span className="errorMessage">{formErrors.senderFirstName}</span>
                    )}
                    </p>
                    <p>
                    <label htmlFor="senderPhoneNumber1">Phone Number1</label>
                    <input type="number" id="senderphoneNumber1" onChange={handleChange  } name="senderPhoneNumber1" value={input.senderPhoneNumber1}  placeholder="Your PhoneNumber.."/>
                    {formErrors.senderPhoneNumber1.length > 0  && (
                        <span className="errorMessage">{formErrors.senderPhoneNumber1}</span>
                    )}
                    </p>
                    <p>
                    <label htmlFor="senderphoneNumber2">Phone Number 2</label>
                    <input type="number" id="senderphoneNumber2" onChange={handleChange } name="senderPhoneNumber2" value={input.senderPhoneNumber2}  placeholder="Your phoneNumber2.."/>
                    {formErrors.senderPhoneNumber2.length > 0  && (
                        <span className="errorMessage">{formErrors.senderPhoneNumber2}</span>
                    )}
                    </p>
                  </div>
              </div>
              <div className="receiver-container">
                 <h3>Receiver Information</h3>
                  <div  className="receiver">
                    <p>
                    <label htmlFor="receiverFirstname">First Name</label>
                    <input type="text" id="receiverFirstname" onChange={handleChange} name="receiverFirstName" value={input.receiverFirstName} placeholder="Your name.."/>
                    {formErrors.receiverFirstName.length > 0  && (
                        <span className="errorMessage">{formErrors.receiverFirstName}</span>
                    )}
                    </p>
                    <p>
                    <label htmlFor="receiverPhoneNumber1">Phone Number1</label>
                    <input type="number" id="receiverphoneNumber1" onChange={handleChange} name="receiverPhoneNumber1" value={input.receiverPhoneNumber1} placeholder="Your PhoneNumber.."/>
                    {formErrors.receiverPhoneNumber1.length > 0  && (
                        <span className="errorMessage">{formErrors.receiverPhoneNumber1}</span>
                    )}
                    </p>
                    <p>
                    <label htmlFor="receiverphoneNumber2">Phone Number 2</label>
                    <input type="number" id="receiverphoneNumber2" onChange={handleChange} name="receiverPhoneNumber2" value={input.receiverPhoneNumber2} placeholder="Your phoneNumber2.."/>
                    {formErrors.receiverPhoneNumber2.length > 0  && (
                        <span className="errorMessage">{formErrors.receiverPhoneNumber2}</span>
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