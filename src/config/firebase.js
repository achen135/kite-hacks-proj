// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAags0zeuWO7Ss7Nahdn72KJu5PtrGz4GQ",
  authDomain: "kite-hacks.firebaseapp.com",
  projectId: "kite-hacks",
  storageBucket: "kite-hacks.appspot.com",
  messagingSenderId: "499816998445",
  appId: "1:499816998445:web:88cd530ad1e5aefbe8baa4",
  measurementId: "G-L5M0GQS19Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);