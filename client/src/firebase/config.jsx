// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBm-Vz65RvyUAYpVr4n4cvM5PfhXKXCtwQ",
    authDomain: "notice-website-da2be.firebaseapp.com",
    projectId: "notice-website-da2be",
    storageBucket: "notice-website-da2be.appspot.com",
    messagingSenderId: "530530543811",
    appId: "1:530530543811:web:82f58d6825c54ee7175a76",
    measurementId: "G-E6X722MH9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);