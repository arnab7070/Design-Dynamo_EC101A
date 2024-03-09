import React, { useState, useEffect } from 'react';
import { getAuth, RecaptchaVerifier, createUserWithEmailAndPassword, signInWithPhoneNumber, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signInAnonymously } from "firebase/auth";
import { auth } from '../firebase'

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
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label><br />
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label><br />
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
