import React from 'react';
import firebase from './firebase/firebase';
import googleSignIn from '../components/googleSignIn';
import facebookSignIn from '../components/facebookSignIn';
import githubSignIn from '../components/githubSignIn';

class LoginPage extends React.Component{

      state={
            email:'',
            password:'',
      };

      githubAuth=()=>{
            githubSignIn(this.props);
      };


      googleAuth=()=>{
            googleSignIn(this.props);
      };

      facebookAuth=()=>{
            facebookSignIn(this.props);
      };

      passwordReset=()=>{

            firebase.auth().sendPasswordResetEmail(this.state.email).then(()=> {
                  console.log('Password Reset Email sent.');
            }).catch((error)=>{
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  console.log('Error Code',errorCode);
                  console.log('Error Message',errorMessage);
            });
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
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(()=> {
                  console.log('Local Persistence created');
                  return firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);                       
            })
            .catch((error)=> {
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  console.log('Error Code',errorCode);
                  console.log('Error Message',errorMessage);
            });


            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((user)=>{
                  console.log(user);
                  console.log("Successfully Logged In!");
                  console.log(firebase.auth().currentUser);
                  this.props.history.push('/dashboard');//Redirecting to Dashboard page.
                  
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

                              <button type='submit'>Submit</button>
                              <button onClick={this.passwordReset}>Forgot Password?</button>
                              <br></br>
                              <a style={{cursor:'pointer'}} onClick={this.googleAuth} href="#ff">Sign in with Google</a>
                              <br></br>
                              <a style={{cursor:'pointer'}} onClick={this.facebookAuth} href="#ff">Sign in with Facebook</a><br></br>
                              <a style={{cursor:'pointer'}} onClick={this.githubAuth} href="#ff">Sign in with Github</a>
                        </form>
                  </div>
            );
      };
}

export default LoginPage;
