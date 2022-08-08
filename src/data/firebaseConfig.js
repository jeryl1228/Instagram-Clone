import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAXzhyDoYOso-l7M7fIsMviASgSLa326Bk",
  authDomain: "instagram-clone-4b0bb.firebaseapp.com",
  projectId: "instagram-clone-4b0bb",
  storageBucket: "instagram-clone-4b0bb.appspot.com",
  messagingSenderId: "1026270268540",
  appId: "1:1026270268540:web:3eaf5325b7a7466faa0df9",
  measurementId: "G-XRW8ES7Q08",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
