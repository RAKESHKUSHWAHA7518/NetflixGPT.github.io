import React from 'react'
import { onAuthStateChanged,  signOut } from "firebase/auth";

import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

import { useEffect } from 'react';
import { LOGO_URL, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

    const navigate = useNavigate()
    const dispatch= useDispatch()
    const user = useSelector(store=>store.user);

    const showGptSearch= useSelector((store) => store.gpt.showGptSearch);
   

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

      const handleGptSearchClick = () => {
        // toggle GPT Search button

        dispatch (toggleGptSearchView());
      };

      const handleLanguageChange = (e) => {
         dispatch (changeLanguage(e.target.value));
      }


  return (
    <div className=' absolute px-8 w-full py-2 flex-col md:flex-row bg-gradient-to-b  z-10 flex justify-between   '>
        <img 
        className='w-44 size-10 mx-auto md:mx-0  ' 
        src ={LOGO_URL} alt='logo' />
       
      { user && <div className='flex p-2 justify-between'>
        {showGptSearch &&<select className='p-2 m-2 bg-gray-900 text-white' onClick={handleLanguageChange}>
          { SUPPORTED_LANGUAGES.map(lang =><option key={lang.identifier} value={lang.identifier}>{lang.name}</option> ) }
          {/* <option value="en">English</option>
          <option value="hindi">हिंदी</option>
          <option value="spanish">spanish</option> */}
        </select>}
        <button className='py-2   px-4 mx-4 my-2 bg-blue-600 text-white rounded-lg' onClick={handleGptSearchClick}> {showGptSearch?"Home Page":"GPT Search"}</button>
        <img className='hidden md:block w-12 h-12 ' alt='usericon' src={user?.photoURL }/>

<button onClick={handleSignOut} className=' font-bold text-white'>(Sign Out)</button>

       </div> }
       
          </div>
  )
}

export default Header
