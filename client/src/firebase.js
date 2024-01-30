// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "mern-estate-672a0.firebaseapp.com",
  projectId: "mern-estate-672a0",
  storageBucket: "mern-estate-672a0.appspot.com",
  messagingSenderId: "598936896983",
  appId: "1:598936896983:web:d4b8e486f4f8ad30547792"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);