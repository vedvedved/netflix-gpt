// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1lFrCMZyI1KDINgWh3n6mji07T2oXGUc",
  authDomain: "netflixgpt-bf333.firebaseapp.com",
  projectId: "netflixgpt-bf333",
  storageBucket: "netflixgpt-bf333.firebasestorage.app",
  messagingSenderId: "1068701408213",
  appId: "1:1068701408213:web:2f861bf1a8025285ebfb5c",
  measurementId: "G-0M9VNWCKSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();