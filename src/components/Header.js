import React from 'react'
import {   signOut } from "firebase/auth";

import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

    const navigate = useNavigate()
    const user = useSelector(store=>store.user);
    const handleSignOut =() => {
        

 
signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/")
}).catch((error) => {
    navigate("/error");
  // An error happened.
});
    };
  return (
    <div className=' absolute px-8 w-full py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img 
        className='w-44 size-10 ' 
        src ={user?.photoURL} alt='logo' />
       
      { user && <div className='flex p-2'>
        <img className='w-12 h-12 ' alt='usericon' src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"/>

<button onClick={handleSignOut} className=' font-bold text-white'>(Sign Out)</button>

       </div> }
       
          </div>
  )
}

export default Header
