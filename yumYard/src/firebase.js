// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv9x-PVzEVLs-nnQP8tQUe6lpjYRJ4bNs",
  authDomain: "codinghub-1a9d4.firebaseapp.com",
  projectId: "codinghub-1a9d4",
  storageBucket: "codinghub-1a9d4.appspot.com",
  messagingSenderId: "861589710795",
  appId: "1:861589710795:web:a80bbad299d63745c3784e",
  measurementId: "G-KQVH667ZG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);