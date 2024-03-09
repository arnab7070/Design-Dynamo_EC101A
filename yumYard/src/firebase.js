// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDQ0RvHsmnlLooWE45rWllcnk52bPAq1L4",
  authDomain: "yumyard-6836f.firebaseapp.com",
  projectId: "yumyard-6836f",
  storageBucket: "yumyard-6836f.appspot.com",
  messagingSenderId: "275507812690",
  appId: "1:275507812690:web:2c585c5dac80934659028b"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
