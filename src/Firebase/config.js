// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzXdAGX1VyaQWG7jQRNbTtOLtEODT4Xlk",
  authDomain: "chewine-65f60.firebaseapp.com",
  projectId: "chewine-65f60",
  storageBucket: "chewine-65f60.appspot.com",
  messagingSenderId: "919450367",
  appId: "1:919450367:web:3ff67e854016b85b3d92ca",
  measurementId: "G-B9BRC7C5MW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
