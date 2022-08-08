import "../styles/app.scss";
import React from "react";
import { useState } from "react";
import { app, database } from "../data/firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const auth = getAuth();
  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value };

    setData({ ...data, ...inputs });
  };
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response.user);
        navigate(`Home`);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="App-header">
      <input
        placeholder="Email"
        name="email"
        type="email"
        className="input-fields"
        onChange={(event) => handleInputs(event)}
      />
      <input
        placeholder="Password"
        name="password"
        type="password"
        className="input-fields"
        onChange={(event) => handleInputs(event)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default Login;
