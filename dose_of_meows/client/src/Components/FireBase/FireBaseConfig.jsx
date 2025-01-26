import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";

import {
    getFirestore,
    doc,
    collection,
    getDoc,
    setDoc,
    updateDoc,
    arrayUnion,
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
    const userSnapshot = await getDoc(userDocRef)
    //Checks for existing user
    if (!userSnapshot.exists()) {
        // If not, creates new user document
        const { displayName, email, photoURL} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                "id": userAuth['uid'],
                displayName,
                email,
                createdAt,
                photoURL,
                "posts":[]
            });
            const newSnap = await getDoc(userDocRef);
            return {...newSnap.data()};
        } catch (error) {
            console.log('error creating the user', error.message);
            return null;
        } 
    }
    console.log(userSnapshot.data());
    return { ...userSnapshot.data() };


}

export const addPost = async (userId, imageURL, caption) => {
    const postRef = doc(collection(db, 'posts')); // Step 1

    const post = { // Step 2
        imageURL,
        caption,
        createdAt: new Date(), // Can be replaced with serverTimestamp() for consistency
        likes: 0,
        comments: [],
        userId, // Linking the post to the user's ID
    };

    try { // Step 3
        await setDoc(postRef, post); // Step 3.1

        const userDocRef = doc(db, 'users', userId); // Step 3.2
        await updateDoc(userDocRef, { // Step 3.3
            posts: arrayUnion(postRef.id), // Add the post ID to the user's posts array
        });

        console.log('Post added successfully!'); // Step 3.4
    } catch (error) { // Step 4
        console.log('Error adding post:', error.message);
    }
};