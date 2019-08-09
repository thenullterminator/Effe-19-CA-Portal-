import React from "react";
import firebase from "./firebase/firebase";

class Dashboard extends React.Component {
  state = {
    currentUser: {}
  };

  LogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful.");
        this.props.history.push("/"); //Redirecting to home page.
      })
      .catch(error => {
        // An error happened.
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log("Error Code", errorCode);
        console.log("Error Message", errorMessage);
      });
  };

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // console.log("Signed in");
        console.log("Signed in! ", user.toJSON());
        this.setState({
          currentUser: user
        });
      } else {
        // User is signed out.
        // ...
        console.log("Signed out!");
        this.props.history.push("/login"); //Redirecting to home page.
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Dash Board</h1>
        <h3>Hello {this.state.currentUser.displayName}</h3>
        <button onClick={this.LogOut}>Log out!!</button>
      </div>
    );
  }
}

export default Dashboard;
