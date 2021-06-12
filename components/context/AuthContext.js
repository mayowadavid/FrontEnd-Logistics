import React, { createContext, useState, useEffect } from 'react';
import { loginValidate, singupValidate } from '../validator/validate';
import {useRouter} from 'next/router';
import { auth, database, provider } from '../firebase';



export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const [isLogin, setisLogin] = useState(false); 
    const [sessionToken, setSessionToken] = useState(); 
    const [signup, setSignup] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      formErrors: {
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          password: '',
      }
    });
    

    const [login, setLogin] = useState({
        email: '',
        password: '',
        formErrors: {
            email: '',
            password: ''
        }
      });

      const [authenticate, setAuthenticate] = useState(false);
      const [authenticating, setAuthenticating] = useState(false);
      const [error, setError] = useState('');
      const router = useRouter();
      const [success, setSuccess] = useState({
          message: '',
          token: '',
          user: {email: '',
          firstName: '',
          fullName: '',
          lastName: '',
          role: '',
          _id: ''} 
      });

      useEffect(()=>{
        auth.onAuthStateChanged(user=>{
          user == null ? setisLogin(false) : setisLogin(true);
        })
      }, [])

         
    const handleLoginChange = (e) => {
        const {name, value} = e.target;
        const{formErrors} = login;
        loginValidate(name, value, formErrors);
            let newLogin = { ...login, [name]: value }
            return setLogin(newLogin)
    } 

    const handleSignupChange = (e) => {
        const{formErrors} = {...signup}
        const {name, value} = e.target;
        singupValidate(name, value, formErrors)
            let newSignup = { ...signup, [name]: value }
            return setSignup(newSignup)
    }


    const handleSignupSubmit = async(e) => {
        e.preventDefault();
        const {firstName, lastName, email, phoneNumber, password} = signup;
        auth.createUserWithEmailAndPassword(email, password).then(cred =>{
          return database.collection('Profile').doc(cred.user.uid).set({
            phoneNumber, email, firstName, lastName
          })}
        ).then(()=>{
          setisLogin(true);
          router.replace('dashboard');
        } )
    }
    
    const handleSignout = (e) => {
      e.preventDefault();
      auth.signOut();
  }

  const handleSocialLogin = (e) => {
    auth.signInWithPopup(provider).then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
      console.log(result);
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

      const handleLoginSubmit = (e) => {
        e.preventDefault();
        setAuthenticating(true);
        const {email, password } = login;
        auth.signInWithEmailAndPassword(email, password).then(()=>{
        setisLogin(true);
        router.replace('dashboard');
          })
      }; 
      
      



    return (
        <AuthContext.Provider value={{sessionToken, setSessionToken, login, signup, isLogin, setisLogin, handleLoginChange, handleSocialLogin, handleSignupChange, handleSignout, handleSignupSubmit, handleLoginSubmit}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
