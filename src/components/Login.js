import "../styles/login.scss";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { auth } from "../data/firebaseConfig";
import logo from "../images/instagramLogo.png";
import { UserContext } from "./App";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  const user = useContext(UserContext);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleModal2 = () => {
    setModal2(!modal2);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      //perform cleanup actions
      unsubscribe();
    };
  }, [user, username]);

  const signUp = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));

    setModal(false);
    console.log(`New user created: ${username}`);
  };

  const Login = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    setModal2(false);
  };

  return (
    <div className="App-header">
      {user ? (
        <button onClick={() => auth.signOut()} className="btn-modal logout">
          Logout
        </button>
      ) : (
        <div>
          <button onClick={toggleModal} className="btn-modal">
            Sign up
          </button>

          <button onClick={toggleModal2} className="btn-modal">
            Login
          </button>
        </div>
      )}

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <form className="form1">
              <center>
                <img className="logo2" src={logo} alt="instagram logo" />
                <Input
                  placeholder="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="input"
                />
                <Input
                  placeholder="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input"
                />
                <Input
                  placeholder="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input"
                />
                <Button type="submit" onClick={signUp}>
                  Sign Up
                </Button>
                <Button onClick={toggleModal} color="error">
                  Close
                </Button>
              </center>
            </form>
          </div>
        </div>
      )}

      {modal2 && (
        <div className="modal">
          <div onClick={toggleModal2} className="overlay"></div>
          <div className="modal-content">
            <form className="form2">
              <center>
                <img className="logo2" src={logo} alt="instagram logo" />
                <Input
                  placeholder="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input"
                />
                <Input
                  placeholder="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input"
                />
                <Button type="submit" onClick={Login}>
                  Login
                </Button>
                <Button onClick={toggleModal2} color="error">
                  Close
                </Button>
              </center>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
