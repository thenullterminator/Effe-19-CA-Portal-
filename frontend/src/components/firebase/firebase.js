import * as firebase from 'firebase';
import Config from './config';

firebase.initializeApp(Config);
export default firebase;

// const email='abc@abc.abc';
// const password='testPassword';

// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
      
//       console.log('Error Code',errorCode);
//       console.log('Error Message',errorMessage);
// });

// const database =firebase.database();

// database.ref('users').set({email}).then(()=>{
//       console.log("Success");
// }).catch((e)=>{
//       console.log(e);
// });
    