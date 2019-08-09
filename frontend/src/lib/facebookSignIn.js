import firebase from "../components/firebase/firebase";
const facebookSignIn = props => {
  const provider = new firebase.auth.FacebookAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log("Facebook:", user);
      console.log("Token:", token);
      props.history.push("/dashboard"); //Redirecting to Dashboard Page.
    })
    .catch(error => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(errorCode);
      console.log(errorMessage);
      console.log(email);
      console.log(credential);
    });
};

export default facebookSignIn;
