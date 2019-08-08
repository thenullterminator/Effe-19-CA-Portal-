import firebase from './firebase/firebase';
const githubSignIn=(props)=>{

      const provider = new firebase.auth.GithubAuthProvider();
      
      firebase.auth().signInWithPopup(provider).then((result)=> {

            var token = result.credential.accessToken;
            var user = result.user;
            console.log('Github:',user);
            console.log('Token:',token);
            props.history.push('/dashboard'); //Redirecting to Dashboard Page.
      }).catch((error)=> {

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

export default githubSignIn;