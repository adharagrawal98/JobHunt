
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7KLxM-gbXwG1as2YA5EKYzU43mJrMt7k",
  authDomain: "jobhunt-56c48.firebaseapp.com",
  projectId: "jobhunt-56c48",
  storageBucket: "jobhunt-56c48.appspot.com",
  messagingSenderId: "821118302798",
  appId: "1:821118302798:web:efa67872c8d017ba80a11f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize auth

export { app, auth };