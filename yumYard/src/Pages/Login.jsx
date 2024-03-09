import React, { useState } from 'react';
import { app } from "../firebase"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';



export const Login = () => {
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');
  
    function onCloseModal() {
      setOpenModal(false);
      setEmail('');
    }
    const auth = getAuth();
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
