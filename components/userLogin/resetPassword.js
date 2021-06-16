import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const PasswordReset = () => {

    const {passwordReset, resetPassword, handlePasswordChange} = useContext(AuthContext);
    const {formErrors} = resetPassword;

    return (
      <div className="form_container">
          <div className="overall-form">
            <div  className="former">
                <form onSubmit={passwordReset}>
                <p>
                <label htmlFor="email">Email</label>
                <input type="text" onChange={handlePasswordChange} id="email" name="email" placeholder="Your name.."/>
                {formErrors.email.length > 0  && (
                    <span className="errorMessage">{formErrors.email}</span>
                )}
                </p>
                <div className="submit-reset">
                    <input type="submit" value="Reset Password"/>
                </div>
                </form>
                </div>
            </div>
      </div>  
    )}
    
export default PasswordReset;