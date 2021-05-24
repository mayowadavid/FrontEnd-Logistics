import Link from 'next/link';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const UserLogin = () => {

    const {login,  handleLoginChange, handleLoginSubmit} = useContext(AuthContext);
    const {formErrors} = login;

    return (
      <div className="form_container">
          <div className="overall-form">
          <div  className="former">
          <form onSubmit={handleLoginSubmit}>
              <p>
              <label htmlFor="email">Email</label>
              <input type="text" onChange={handleLoginChange} id="email" name="email" placeholder="Your name.."/>
              {formErrors.email.length > 0  && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
              </p>
              
                <p>
                     <label htmlFor="password">Password</label>
                    <input type="password" onChange={handleLoginChange} id="password" name="password" placeholder="Your last name.."/>
                    {formErrors.password.length > 0  && (
                    <span className="errorMessage">{formErrors.password}</span>
                )}
                </p>
              <div className="submit">
                 <input type="submit" value="login"/>
              </div>
          </form>
        </div>
        <h5 className="login-tag">Forgot password?</h5> 
        <div className="tag">
            <h5>Don't have an account?</h5><h5><Link href="/signup"><a>Sign up</a></Link></h5>
        </div>
    </div>
      </div>  
    )}
    
export default UserLogin;