// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4Ha3eEEUdb01JGWZ-Y2m-5jOwwF6_VkY",
  authDomain: "netflixgpt-534e3.firebaseapp.com",
  projectId: "netflixgpt-534e3",
  storageBucket: "netflixgpt-534e3.appspot.com",
  messagingSenderId: "679875541654",
  appId: "1:679875541654:web:9a6f4641a657cc80ff20b7",
  measurementId: "G-KN4KEKVXQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

  export const auth = getAuth();