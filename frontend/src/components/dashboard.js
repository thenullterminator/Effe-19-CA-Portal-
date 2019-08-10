import React from "react";
import firebase from "./firebase/firebase";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {},
      isLoading: true
    };

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // console.log("Signed in");
        console.log("Signed in! ", user.toJSON());
        this.setState({
          currentUser: user,
          isLoading: false
        });
      } else {
        // User is signed out.
        // ...
        console.log("Signed out!");
        this.props.history.push("/login"); //Redirecting to home page.
      }
    });
  }

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
    //this is depreicated do-not use
  }
  render() {
    if (this.state.isLoading) {
      return <div>Loading</div>;
    }

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
