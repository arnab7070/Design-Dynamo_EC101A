import React, { useState, useEffect } from 'react';
import { getAuth, RecaptchaVerifier, createUserWithEmailAndPassword, signInWithPhoneNumber, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signInAnonymously } from "firebase/auth";
import Lottie from "lottie-react";
import awesome from "../assets/login.json";import { auth } from '../firebase'

export const Login = () => {
    // const auth = getAuth(app);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            handleSignIn();
        } catch (error) {
            console.error(error);
        }
    };

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => console.log(userCredential))
            .catch(error => console.error(error));
    }

    const handleSignIn = () => {
        // google login
        // const provider = new GoogleAuthProvider();
        // signInWithPopup(auth, provider)
        //     .then((userCredential) => console.log(userCredential))
        //     .catch(error => console.error(error));

        // github login
        // const provider = new GithubAuthProvider();
        // signInWithPopup(auth, provider)
        //     .then((result) => {
        //         // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        //         const credential = GithubAuthProvider.credentialFromResult(result);
        //         const token = credential.accessToken;

        //         // The signed-in user info.
        //         const user = result.user;
        //         // IdP data available using getAdditionalUserInfo(result)
        //         // ...
        //     }).catch((error) => {
        //         // Handle Errors here.
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         // The email of the user's account used.
        //         const email = error.customData.email;
        //         // The AuthCredential type that was used.
        //         const credential = GithubAuthProvider.credentialFromError(error);
        //         // ...
        //     });
        
        // sign in anonymously
        signInAnonymously(auth).then((userCredential)=>console.log(userCredential)).catch((error)=>console.log(error));

        // email login
        // signInWithEmailAndPassword(auth, email, password).then((userCredential)=>console.log(userCredential));
    }

    return (
        <>
        <div className="bg-gradient-to-r from-amber-200 to-yellow-300">
          <div class="relative h-screen w-screen flex items-center justify-center">
            <div class="absolute inset-0 z-0">
              <Lottie animationData={awesome} class="hidden md:block md:h-screen md:w-full" />
            </div>
    
            <div class="z-10">
              <div class="content mt-0">
                <div class="text">Login Form</div>
                <form action="#">
                  <div class="field">
                    <input type="text" required />
                    <span class="fas fa-user"></span>
                    <label>Email or Phone</label>
                  </div>
                  <div class="field">
                    <input type="password" required />
                    <span class="fas fa-lock"></span>
                    <label>Password</label>
                  </div>
                  <button>Sign in</button>
                  <div class="sign-up">
                    Not a member?
                    <a href="#">signup now</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>
        </>
    )
}
