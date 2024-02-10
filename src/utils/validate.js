

 export const checkValidData= (email,passwords,name) => {

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const isPasswdValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passwords);
   
   //   const isNameValid = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name);

      // if(isNameValid) return " Name is invalid"

    if(!isEmailValid) return  "  Email  is invalid";
    
    if(!isPasswdValid) return  " password is invalid";

     return null;
};