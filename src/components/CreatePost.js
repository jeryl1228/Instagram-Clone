import React, { useState } from "react";
import "../styles/createPost.scss";
import { storage, db } from "../data/firebaseConfig";
import { Input } from "@mui/material";

function CreatePost() {
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
    <>
      <button onClick={toggleModal} className="btn-modal">
        Create a Post
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="label">New Post</h2>
            <label>Description: </label>
            <Input
              text="text"
              placeholder="Enter the Post Description"
              onChange={(event) => setDescription(event.target.value)}
              value={description}
              className="descinput"
              variant="outlined"
            ></Input>
            <br />
            <Input type="file" onChange={handleChange}></Input>
            <br />
            <button onClick={handleUpload}>Make Post</button>
            <progress value={progress} max="100" class="progressbar" />
            <button className="close-modal" onClick={toggleModal} color="error">
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CreatePost;
