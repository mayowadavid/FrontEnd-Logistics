import Link from 'next/link';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


const AdminSignUp = () => {


    const{signup, handleAdminSignUp, handleSignupChange, handleSignupSubmit} = useContext(AuthContext);
    const {formErrors} = {...signup};
    

    return (
      <div className="form_container">
        <div className="overall-form">
              <div  className="signup-wrapper">
              <form onSubmit={ handleAdminSignUp}>
                <div  className="signup">
                  <p>
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" onChange={handleSignupChange} id="firstName" name="firstName" value={signup.firstName} placeholder="Your first name.."/>
                  {formErrors.firstName.length > 0  && (
                    <span className="errorMessage">{formErrors.firstName}</span>
                  )}
                  </p>
              
                  <p>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" onChange={handleSignupChange} id="lastName" name="lastName" value={signup.lastName} placeholder="Your last name.."/>
                    {formErrors.lastName.length > 0  && (
                    <span className="errorMessage">{formErrors.lastName}</span>
                  )}
                  </p>
                  
                  <p>
                    <label htmlFor="email">Email</label>
                    <input type="text" onChange={handleSignupChange} id="email" name="email" value={signup.email} placeholder="Your email.."/>
                    {formErrors.email.length > 0  && (
                    <span className="errorMessage">{formErrors.email}</span>
                        )}
                  </p>
                  
                  <p>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="number" onChange={handleSignupChange} id="phoneNumber" name="phoneNumber" value={signup.phoneNumber} placeholder="Your phone Number.."/>
                    {formErrors.phoneNumber.length > 0  && (
                    <span className="errorMessage">{formErrors.phoneNumber}</span>
                        )}
                  </p>
                  
                  <p>
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={handleSignupChange} id="password" name="password" value={signup.password} placeholder="Your password.."/>
                    {formErrors.password.length > 0  && (
                    <span className="errorMessage">{formErrors.password}</span>
                        )}
                  </p>
                  </div>
                  <div className="submit">
                  <input type="submit" value="Signup"/>
                  </div>
                
              </form>
            </div>
            <div className="tag">
                <h5>Have an account?</h5><h5><Link href="/admin-login"><a>Login</a></Link></h5>
            </div>
        </div>
        </div>
       
    )}
    
export default AdminSignUp;