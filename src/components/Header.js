import React from 'react'
import { onAuthStateChanged,  signOut } from "firebase/auth";

import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

import { useEffect } from 'react';
import { LOGO_URL } from '../utils/constants';

const Header = () => {

    const navigate = useNavigate()
    const dispatch= useDispatch()
    const user = useSelector(store=>store.user);
   

    const handleSignOut =() => {
        

 
signOut(auth).then(() => {
  // Sign-out successful.
   
}).catch((error) => {
    navigate("/error");
  // An error happened.
});
    };

    useEffect(() =>{

   

      const unsubscibe= onAuthStateChanged(auth, (user) => {
        if (user) {
      
        const {uid,email,displayName ,photoURL}= user;
          dispatch(addUser({uid:uid, email:email, displayName:displayName ,photoURL:photoURL}));
      
      
              // navigate("/browser")
              navigate("/browse");
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          // const uid = user.uid;
          // ...
        } else {
      
          dispatch(removeUser());
          navigate("/")
          
          // User is signed out
          // ...
        }
      });
       
      //  unsubscribe when unmount 
      return ()=>  unsubscibe();
      
      },[]);


  return (
    <div className=' absolute px-8 w-full py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img 
        className='w-44 size-10 ' 
        src ={LOGO_URL} alt='logo' />
       
      { user && <div className='flex p-2'>
        <img className='w-12 h-12 ' alt='usericon' src={user?.photoURL }/>

<button onClick={handleSignOut} className=' font-bold text-white'>(Sign Out)</button>

       </div> }
       
          </div>
  )
}

export default Header
