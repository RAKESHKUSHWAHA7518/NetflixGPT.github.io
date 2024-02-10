 import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from  "../utils/firebase";
import {   signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {    updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';

import { addUser } from '../utils/userSlice';
 

const Login = () => {

    const [isSignInForm,setIsSignInForm] = useState(true);

    const [errorMessage, setErrorMessage] = useState(null)

    const navigate =  useNavigate();

    const dispatch = useDispatch();


    const name= useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick =()=>{
        //  validate the form data validation 

        // checkValidData

        // console.log(email.current.value);
        // console.log(password.current.value);

        const message = checkValidData (email.current.value, password.current.value)
        setErrorMessage(message);

        if(message) return;

        // Sign and sign up  logic
            //  create a new  user  
         
            if(!isSignInForm){
                // sign up logic

                createUserWithEmailAndPassword(
                    auth, 
                    email.current.value,
                    password.current.value  )

                 .then((userCredential) => {
                 // Signed up 
                const user = userCredential.user;

                

         updateProfile(user, {
     displayName: name.current.value, 
     photoURL: "https://avatars.githubusercontent.com/u/99179878?v=4"
})    .then(() => {
  // Profile updated!
  // ...

  const {uid,email,displayName ,photoURL}= auth.currentUser;

  dispatch(addUser({uid:uid,
     email:email, 
     displayName:displayName ,
     photoURL:photoURL}));
   

   
  navigate("/browse");
})     .catch((error) => {

    setErrorMessage(  error.Message);
    // ..
  // An error occurred
  // ...
});
               

                console.log(user);

                  // ...
  })
                .catch((error) => {
               const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " -" + errorMessage);
    // ..
  });

            } else{
        //    Sign In logic
        signInWithEmailAndPassword(
            auth, email.current.value,
            password.current.value
             )

          .then((userCredential) => {
    // Signed in 
       const user = userCredential.user;
       navigate("/browse");

       console.log(user);
    // ...
  })
           .catch((error) => {
            const errorCode = error.code;
             const errorMessage = error.message;
             setErrorMessage(errorCode+ " "+errorMessage);
             
  });



            }

        
 //  Sign / sign Up

    }

    const toggleSignInform = ()=>{
        setIsSignInForm (!isSignInForm);
    };
   return (
     <div>
        <Header/>
     <div className='absolute'>

      <img src= "https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt='logo'/>
      </div>
     <form onSubmit={(e)=> e.preventDefault()} className= 'w-3/12  absolute p-12 bg-black  my-36  mx-auto right-0 left-0  text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{ isSignInForm ? "Sign In" :"Sign Up"}</h1>
        {!isSignInForm &&( <input ref={name} type ="text "  placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />)}
       
        <input ref={email} type ="text "  placeholder='E-mail Address' className='p-4 my-4 w-full bg-gray-700' />
        <input ref={password} type ="password "  placeholder=' password' className='p-4 my-4 w-full bg-gray-700' />
        <p className=' text-red-500 font-bold'> {errorMessage}</p>
        <button className='p-4 w-full my-6 bg-red-600 rounded-lg' onClick={handleButtonClick} >{ isSignInForm ? "Sign In" :"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInform}> { isSignInForm ? "New to Netflix ? Sign Up  Now" :"Already registered ?Now Sign In"}</p>
     </form>

      </div>
   )
 }
 
 export default Login
 