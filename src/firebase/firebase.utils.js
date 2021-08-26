import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBjqT-ARGMDHHPkCc95wcOaQpiUAdt6GGQ",
    authDomain: "crwn-clothing-dtb.firebaseapp.com",
    projectId: "crwn-clothing-dtb",
    storageBucket: "crwn-clothing-dtb.appspot.com",
    messagingSenderId: "760930125490",
    appId: "1:760930125490:web:7d6f911291c874b368ebab",
    measurementId: "G-RNKK8GQK1S"
  };

firebase.initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

// Google Auth utility
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })
};

export default firebase;