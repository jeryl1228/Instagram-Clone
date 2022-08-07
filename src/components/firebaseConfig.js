// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1J7ZRHNheoDiayL2iCtbXh-NyZ_ec0HA",
  authDomain: "instagram-clone-56517.firebaseapp.com",
  projectId: "instagram-clone-56517",
  storageBucket: "instagram-clone-56517.appspot.com",
  messagingSenderId: "497052802749",
  appId: "1:497052802749:web:8ce4805a74d8e8b11121d4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage();