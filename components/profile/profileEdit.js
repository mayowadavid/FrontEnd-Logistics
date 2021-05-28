import React, {useContext} from 'react';
import { ClientContext } from '../context/ClientContext';
import {avatar} from "../../svg";


const ProfileEdit = () => {

    const { handleProfileChange , handleProfilePreview, profile, temporaryImage, profileImage, profileDetails} = useContext(ClientContext);

    const {formErrors} = profile;
    console
    return (
      <div className="profile-wrapper">
            <div  className="user-profile">
            <div className="profile-avatar">
              {
                temporaryImage !==  undefined ? <img src={profileImage !== undefined ? profileImage : temporaryImage} /> : (<div> 
                <input type="file" name="profilePicture" onChange={ handleProfileChange } id="file" accept="/.jpg, .png, gif" />
                <label htmlFor="file">
                  {avatar()}<h4>Upload avatar</h4>
                </label>
                </div>) 
              }
            </div>   
          <form onSubmit={handleProfilePreview}>
            <div className="user">
                <p>
                <label htmlFor="firstName">First Name</label>
                  <input type="text" onChange={ profileDetails } id="firstName" name="firstName"  value={profile.firstName} placeholder="Your name.."/>
                  {formErrors.firstName.length > 0  && (
                    <span className="errorMessage">{formErrors.firstName}</span>
                  )}
                </p>
                <p>
                <label htmlFor="lastName">Last Name</label>
                  <input type="text" onChange={ profileDetails } id="lastName" name="lastName" value={profile.lastName} placeholder="Your last name.."/>
                  {formErrors.lastName.length > 0  && (
                    <span className="errorMessage">{formErrors.lastName}</span>
                  )}
                </p>
                <p>
                <label htmlFor="email">Email</label>
                  <input type="text" onChange={ profileDetails } id="email" name="email" value={profile.email} placeholder="Your email.."/>
                  {formErrors.email.length > 0  && (
                    <span className="errorMessage">{formErrors.email}</span>
                  )}
                </p>
                <p><label htmlFor="phoneNumber">Phone Number</label>
                  <input type="text" onChange={ profileDetails } id="PhoneNumber" name="phoneNumber" value={profile.phoneNumber} placeholder="Your phone Number.."/>
                  {formErrors.phoneNumber.length > 0  && (
                    <span className="errorMessage">{formErrors.phoneNumber}</span>
                  )}
                </p>       
                <p><label htmlFor="address">Address</label>
                  <textarea cols="4" row="8" type="text" onChange={ profileDetails } id="address" name="address" value={profile.address} placeholder="Your Address"/>
                  {formErrors.address.length > 0  && (
                    <span className="errorMessage">{formErrors.address}</span>
                  )}</p>
              </div>
              <div className="submit" >
                  <input  type="submit" value="preview"/>
                </div> 
          </form>
          
          
        </div>
      </div>  
    )}
    
export default ProfileEdit;