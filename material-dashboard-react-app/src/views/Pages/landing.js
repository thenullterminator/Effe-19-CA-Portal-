import React from 'react';
import {Link} from 'react-router-dom'
import { useLastLocation } from 'react-router-last-location';
import firebase from '../../firebase/firebase';

const LandingPage=()=>{
      
  if(useLastLocation() && useLastLocation().pathname.startsWith('/admin/'))
  {
    // if last location is dashboard then sign out.
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        // console.log("Sign-out successful. at home");
      })
      .catch(error => {
        // An error happened.
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log("Error Code", errorCode);
        console.log("Error Message", errorMessage);
    });
  }
      
      
  return (

        <div>
              <h1>Welcome To CA programme!</h1>
              <button><Link to='/auth/login-page'>Log In</Link></button>
              <button><Link to='/auth/register-page'>Register</Link></button>
        </div>

  );
};

export default LandingPage;