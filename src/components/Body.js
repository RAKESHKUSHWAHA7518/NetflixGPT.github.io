import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
 import {createBrowserRouter  } from "react-router-dom";
 import { RouterProvider} from "react-router-dom";

 import {  onAuthStateChanged } from "firebase/auth";

 import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

 

const Body = () => {

    const dispatch = useDispatch();
    

 const appRoutes = createBrowserRouter([
{
    path:"/",
    element:<Login/>,
},

{
    path:"/browse",
    element:<Browse/>,
},


]);

useEffect(() =>{

   

onAuthStateChanged(auth, (user) => {
  if (user) {

  const {uid,email,displayName ,photoURL}= user;
    dispatch(addUser({uid:uid, email:email, displayName:displayName ,photoURL:photoURL}));
        
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    // const uid = user.uid;
    // ...
  } else {

    dispatch(removeUser());
    
    // User is signed out
    // ...
  }
});


},[]);

  return (
    <div>

        <RouterProvider router ={appRoutes}/>
         
      
    </div>
  )
}

export default Body
 