// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmvmqOuFHvGDa_OwK2nxlsA-IWpGrfNAg",
  authDomain: "react-dragon-news-auth-1ee9d.firebaseapp.com",
  projectId: "react-dragon-news-auth-1ee9d",
  storageBucket: "react-dragon-news-auth-1ee9d.appspot.com",
  messagingSenderId: "945218733630",
  appId: "1:945218733630:web:204bdc01b8f4397844336f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app