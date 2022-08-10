import React, { useState } from "react";
import "../styles/menu.scss";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Inbox } from "../images/inbox.svg";
import { ReactComponent as CreatePost } from "../images/createPost.svg";
import { ReactComponent as Notifications } from "../images/notifications.svg";

import ProfileIcon from "./ProfileIcon";
import { storage, db } from "../data/firebaseConfig";

import Login from "./Login";
import { Button, TextField } from "@mui/material";

function Menu() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [progress, setProgress] = useState(0);
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const handleChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("card").add({
              //hours: firebase.firestore.FieldValue.serverTimestamp(),
              description: description,
              image: url,
              // username: username,
            });
            setProgress(0);
            setDescription("");
            setImage(null);
          });
      }
    );
  };
  return (
    <div className="menu">
      <a href="/">
        <Home className="icon" />
      </a>
      <a href="/Inbox">
        <Inbox className="icon" />
      </a>
      <CreatePost className="icon btn-modal" onClick={toggleModal} />
      <a href="/Notifications">
        <Notifications className="icon" />
      </a>
      <a href="/profile">
        <ProfileIcon iconSize="small" image={image} />
      </a>
      <p>|</p>
      <Login />
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <form>
              <center>
                <h2>Upload Photo</h2>
                <TextField
                  text="text"
                  placeholder="Enter the Post Description"
                  onChange={(event) => setDescription(event.target.value)}
                  value={description}
                  className="descInput"
                  variant="outlined"
                  label="Description/Caption"
                  multiline
                  rows={4}
                ></TextField>
                <br />
                <label className="inputFileLabel">
                  <input
                    type="file"
                    onChange={handleChange}
                    className="inputFile"
                  ></input>
                </label>

                <Button onClick={handleUpload}>Upload</Button>

                <Button
                  className="close-modal"
                  onClick={toggleModal}
                  color="error"
                >
                  CLOSE
                </Button>
              </center>
            </form>
            <progress value={progress} max="100" className="progressbar" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
