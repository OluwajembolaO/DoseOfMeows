import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBtZ7CZPAx_47-GbGX2O0XaUuOTvUYVbnY",
    authDomain: "doseofmeows-ecceb.firebaseapp.com",
    projectId: "doseofmeows-ecceb",
    storageBucket: "doseofmeows-ecceb.firebasestorage.app",
    messagingSenderId: "894440001701",
    appId: "1:894440001701:web:afc4911bfec5803f107d4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth['uid']);
    console.log(userAuth)
    const userSnapshot = await getDoc(userDocRef)
    //Checks for existing user
    if (!userSnapshot.exists()) {
        // If not, creates new user document
        const { displayName, email, photoURL} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                photoURL
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        } 
        return userDocRef;
    }


}