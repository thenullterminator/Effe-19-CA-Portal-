import React from "react";
import firebase from "./firebase/firebase";
import googleSignIn from "../lib/googleSignIn";
import facebookSignIn from "../lib/facebookSignIn";
import githubSignIn from "../lib/githubSignIn";
import { Link } from "react-router-dom";
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isloading: true
    };

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push("/dashboard"); //Redirecting to home page.
      }
    });
    this.setState({
      isloading: false
    });
  }

  githubAuth = () => {
    githubSignIn(this.props);
  };

  googleAuth = () => {
    googleSignIn(this.props);
  };

  facebookAuth = () => {
    facebookSignIn(this.props);
  };

  passwordReset = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(this.state.email)
      .then(() => {
        console.log("Password Reset Email sent.");
      })
      .catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error Code", errorCode);
        console.log("Error Message", errorMessage);
      });
  };

  onEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  onPasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  onSubmitForm = e => {
    e.preventDefault();

    // Some Custom Validation.
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        console.log("Local Persistence created");
        return firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password);
      })
      .catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error Code", errorCode);
        console.log("Error Message", errorMessage);
      });

    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        console.log(user);
        console.log("Successfully Logged In!");
        console.log(firebase.auth().currentUser);
        this.props.history.push("/dashboard"); //Redirecting to Dashboard page.
      })
      .catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log("Error Code", errorCode);
        console.log("Error Message", errorMessage);
      });

    
  };

  render() {
    //console.log(this.state.isloading);

    if (this.state.isloading) {
      return <div>Loading..</div>;
    }

    return (
      <div>
        <h1>Login-</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.onEmailChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onPasswordChange}
          />

          <button type="submit">Submit</button>
          <button>
            <Link to="/register">Register</Link>
          </button>
          <button onClick={this.passwordReset}>Forgot Password?</button>
          <br />
          <a style={{ cursor: "pointer" }} onClick={this.googleAuth} href="#ff">
            Sign in with Google
          </a>
          <br />
          <a
            style={{ cursor: "pointer" }}
            onClick={this.facebookAuth}
            href="#ff"
          >
            Sign in with Facebook
          </a>
          <br />
          <a style={{ cursor: "pointer" }} onClick={this.githubAuth} href="#ff">
            Sign in with Github
          </a>
        </form>
      </div>
    );
  }
}

export default LoginPage;
