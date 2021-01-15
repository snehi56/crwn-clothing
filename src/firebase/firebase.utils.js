import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDrv5wr8uoeyOnHInfkBrgojOiTF6HGf-o",
    authDomain: "crown-db-8559c.firebaseapp.com",
    projectId: "crown-db-8559c",
    storageBucket: "crown-db-8559c.appspot.com",
    messagingSenderId: "272659063204",
    appId: "1:272659063204:web:085429f2cbc3b5302de131",
    measurementId: "G-YESSNQB8G9"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GithubAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account'});

  export const signInwithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;