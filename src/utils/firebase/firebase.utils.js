import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfEE9lsgn9xOm8666_Nl0FA5Z5Ol2PU2c",

  authDomain: "crwn-clothing-lb.firebaseapp.com",

  projectId: "crwn-clothing-lb",

  storageBucket: "crwn-clothing-lb.appspot.com",

  messagingSenderId: "685833027354",

  appId: "1:685833027354:web:199109781716f9ebe9b6a3",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating users", error.message);
    }
  }
  return userDocRef;
};
