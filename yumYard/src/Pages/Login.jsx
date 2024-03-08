import React, { useState } from 'react';
import { app } from "../firebase"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Lottie from "lottie-react";
import awesome from "../assets/login.json";
export const Login = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // handleSignUp();
        handleSignIn();
    };

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => console.log(userCredential))
    }

    const handleSignIn = () => {
        // google login
        // const provider = new GoogleAuthProvider();
        // const result = signInWithPopup(auth, provider).then((userCredential)=>console.log(userCredential));
        
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
