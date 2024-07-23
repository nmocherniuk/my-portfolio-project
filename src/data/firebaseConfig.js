// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlAtUHzbJIwWH0E4-0aaf1ObTCLQQ225k",
  authDomain: "portfolio-8de6d.firebaseapp.com",
  projectId: "portfolio-8de6d",
  storageBucket: "portfolio-8de6d.appspot.com",
  messagingSenderId: "758154656524",
  appId: "1:758154656524:web:5a5b5efe5b6434c9c5a729",
  measurementId: "G-EXQ9G67EXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);