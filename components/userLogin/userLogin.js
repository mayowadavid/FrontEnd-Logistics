import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Google, innerLoader } from '../../svg';

const UserLogin = () => {

    const { authenticating, handleLoginChange, handleLoginSubmit, handleSocialLogin} = useContext(AuthContext);
    
    return (<div className="form_container">
                <div className="overall-form">
                <div  className="former">
                <form onSubmit={handleLoginSubmit}>
                    <p>
                    <label htmlFor="email">Email</label>
                    <input type="text" onChange={handleLoginChange} id="email" name="email" placeholder="Your name.."/>
                    </p>
                      <p>
                          <label htmlFor="password">Password</label>
                          <input type="password" onChange={handleLoginChange} id="password" name="password" placeholder="Your last name.."/>
                      </p>
                    <div className="submit">
                        {authenticating !== true ? <input type="submit" value="login"/>: <button ><span>connecting...</span><span>{innerLoader()}</span></button>}
                    </div>
                </form>
                    <div className="social-login" onClick={handleSocialLogin}>
                          <span>or sign in with</span>
                          <button><span>{Google()}</span><span>Google</span></button>
                    </div>
              </div>
              <div className="login-tag">
              <h5 >Forgot password?</h5><h5 ><Link href="/ResetPassword"><a>Reset password</a></Link></h5> 
              </div>
              
              <div className="tag">
                  <h5>Don't have an account?</h5><h5><Link href="/signup"><a>Sign up</a></Link></h5>
              </div>
          </div>
      </div> 
    )}
    
export default UserLogin;