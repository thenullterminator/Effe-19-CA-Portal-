import React from 'react';
import firebase from './firebase/firebase';

class LoginPage extends React.Component{

      state={
            email:'',
            password:''
      };

      onEmailChange=(e)=>{
            this.setState({
                  email:e.target.value
            });
      };

      onPasswordChange=(e)=>{
            this.setState({
                  password:e.target.value
            });
      };

      onSubmitForm=(e)=>{

            e.preventDefault();

            // Some Custom Validation.

            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((user)=>{
                  console.log(user);
                  console.log("Successfully Logged In!");
                  console.log(firebase.auth().currentUser);
            })
            .catch((error) =>{
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  
                  console.log('Error Code',errorCode);
                  console.log('Error Message',errorMessage);
            });
            
            

            // Redirect on Successfull registration.
      };

      render(){
            return (
                  <div>
                        <h1>Login</h1>
                        <form onSubmit={this.onSubmitForm}>
                              <input
                                    type='email'
                                    placeholder='Email'
                                    value={this.state.email}
                                    onChange={this.onEmailChange}
                              />
                              <input
                                    type='password'
                                    placeholder='Password'
                                    value={this.state.password}
                                    onChange={this.onPasswordChange}
                              />

                              <button>Submit</button>
                        </form>
                  </div>
            );
      };
}

export default LoginPage;
