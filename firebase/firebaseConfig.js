// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf-8BLESRvxczfGJAsD4yXCVR6TDB7ojY",
  authDomain: "space-tourism-web.firebaseapp.com",
  projectId: "space-tourism-web",
  storageBucket: "space-tourism-web.appspot.com",
  messagingSenderId: "18050434161",
  appId: "1:18050434161:web:1d276ee5a1666414eac7d0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);