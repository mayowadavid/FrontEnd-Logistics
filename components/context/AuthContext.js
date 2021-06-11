import React, { createContext, useState, useEffect } from 'react';
import axios from '../../helpers/axios';
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

      const signout = async(e) => {
        e.preventDefault();
          const res = await axios.post('/signout').catch(function (error) {
              if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              console.log(error.config);
            });
          localStorage.clear();
         
          router.replace('/login');
      }

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
      const {firstName, lastName, email, phoneNumber, password} = signup;
      auth.signOut()
  
  }

  const handleSocialLogin = (e) => {
    auth.signInWithPopup(provider).then((result) => console.log(result))
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
      
      const handleAdminSubmit = async(e) => {
        e.preventDefault();
        setAuthenticating(true);
        const res = await axios.post('/admin/signin', login).catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            console.log(error.config);
          });
       if(res && res.status == 200){
        setAuthenticating(false);
        setAuthenticate(true);
        setisLogin(true);
       const {token, user}= res.data;
        localStorage.setItem('token', token);
        let message = "welcome";
        setSuccess({...success, message, token, user});
        router.replace('/contact');
       }
      }; 



    return (
        <AuthContext.Provider value={{sessionToken, signout, setSessionToken, login, signup, isLogin, setisLogin, handleLoginChange, handleSocialLogin, handleSignupChange, handleSignout, handleSignupSubmit, handleLoginSubmit, handleAdminSubmit}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
