import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDrv5wr8uoeyOnHInfkBrgojOiTF6HGf-o",
    authDomain: "crown-db-8559c.firebaseapp.com",
    databaseURL: "https://crown-db-8559c-default-rtdb.firebaseio.com",
    projectId: "crown-db-8559c",
    storageBucket: "crown-db-8559c.appspot.com",
    messagingSenderId: "272659063204",
    appId: "1:272659063204:web:085429f2cbc3b5302de131",
    measurementId: "G-YESSNQB8G9"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
  