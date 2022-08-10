import React, { useState } from "react";
import "../styles/menu.scss";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Inbox } from "../images/inbox.svg";
import { ReactComponent as CreatePost } from "../images/createPost.svg";
import { ReactComponent as Notifications } from "../images/notifications.svg";

import ProfileIcon from "./ProfileIcon";
import "../styles/createPost.scss";
import { storage, db } from "../data/firebaseConfig";

import Login from "./Login";

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
            <h2>New Post</h2>
            <label>Description: </label>
            <input
              text="text"
              placeholder="Enter the Post Description"
              onChange={(event) => setDescription(event.target.value)}
              value={description}
            ></input>
            <br />
            <input type="file" onChange={handleChange}></input>
            <br />
            <button onClick={handleUpload}>Make Post</button>
            <progress value={progress} max="100" />
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
