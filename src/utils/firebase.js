// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc3qYFhrXkQdS2c9Dd_-8gNpMTKFkHu4w",
  authDomain: "deakin-web-app-2247f.firebaseapp.com",
  projectId: "deakin-web-app-2247f",
  storageBucket: "deakin-web-app-2247f.appspot.com",
  messagingSenderId: "295819319965",
  appId: "1:295819319965:web:ac6e71ee4c00ee9f781274"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseapp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();
export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) =>{
    if (!userAuth) return;

    const userDocRef = doc (db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (! userSnapshot.exists()){
        const {displayName, lastName, email} = userAuth;
        const createdAt = new Date();
    
        try {
            await setDoc(userDocRef, {
                displayName,
                lastName,
                email,
                createdAt,
                ...additionalInfo
            })
        } catch (error){
            console.log('Error in creating ', error.message)
        }
    }
    console.log(userDocRef);
    return userDocRef;
}



export const createAuthUserWithEmailAndPassword = async (email, password) =>{
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signinAuthUserWithEmailAndPassword = async (email, password) =>{
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}