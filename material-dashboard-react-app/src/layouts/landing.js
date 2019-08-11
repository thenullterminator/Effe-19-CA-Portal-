import React from 'react';
import {Link} from 'react-router-dom'

const LandingPage =()=>{
      return (

            <div>
                  <h1>Welcome To CA programme!</h1>
                  <button><Link to='/auth/login-page'>Log In</Link></button>
                  <button><Link to='/auth/register-page'>Register</Link></button>
            </div>

      );
};

export default LandingPage;