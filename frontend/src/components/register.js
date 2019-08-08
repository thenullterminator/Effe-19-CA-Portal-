import React from 'react';
import firebase from './firebase/firebase';
import googleSignIn from '../components/googleSignIn';
import facebookSignIn from '../components/facebookSignIn';
import githubSignIn from '../components/githubSignIn';



class RegisterPage extends React.Component{

      state={
            name:'',
            email:'',
            password:'',
            phone:''
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

      onNameChange=(e)=>{
            this.setState({
                  name:e.target.value
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
           
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((user)=>{
                 
                  console.log("Registration Successfull!");

                  const User=firebase.auth().currentUser;

                  // Adding display Name.
                  User.updateProfile({
                        displayName:this.state.name
                        }).then((user)=> {
                              // Update successful.
                              console.log("Name Added!");
                              console.log(User);
                             
                        }).catch((error)=>{
                              // An error happened.
                              // Handle Errors here.
                              var errorCode = error.code;
                              var errorMessage = error.message;
                              console.log('Error Code',errorCode);
                              console.log('Error Message',errorMessage);
                  });
                 
                  // Sending a verification email.
                  console.log('Current:',user);
                  User.sendEmailVerification().then(()=> {
                        console.log("Verification Email sent");
                        this.props.history.push('/login');//Redirecting to Login page.
                  }).catch((error)=> {
                       
                        // An error happened.
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        
                        console.log('Error Code',errorCode);
                        console.log('Error Message',errorMessage);
                  });

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
                        <h1>Register</h1>
                        <form onSubmit={this.onSubmitForm}>
                              <input
                                    type='text'
                                    placeholder='Name'
                                    autoFocus
                                    value={this.state.name}
                                    onChange={this.onNameChange}
                              />
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
                              <br></br>
                              <a style={{cursor:'pointer'}} onClick={this.googleAuth} href="#ff">Sign in with Google</a><br></br>
                              <a style={{cursor:'pointer'}} onClick={this.facebookAuth} href="#ff">Sign in with Facebook</a><br></br>
                              <a style={{cursor:'pointer'}} onClick={this.githubAuth} href="#ff">Sign in with Github</a>
                        </form>
                  </div>
            );
      };
}

export default RegisterPage;
