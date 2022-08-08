import React, {useState} from "react";
import "../styles/menu.scss";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Inbox } from "../images/inbox.svg";
import { ReactComponent as CreatePost } from "../images/createPost.svg";
import { ReactComponent as Notifications } from "../images/notifications.svg";
import image from "../images/profile.jpg";
import ProfileIcon from "./ProfileIcon";
import "../styles/createPost.scss";

function Menu() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="menu">
      <a href="/Home">
        <Home className="icon" />
      </a>
      <a href="/Inbox">
        <Inbox className="icon" />
      </a>
        <CreatePost className="icon btn-modal" onClick={toggleModal}/>
      <a href="/Notifications">
        <Notifications className="icon" />
      </a>
      <ProfileIcon iconSize="small" image={image} />

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>New Post</h2>
            <label>Description: </label>
            <input text="text" placeholder="Enter the Post Description"></input>
            <br />
            <input type="file"></input>
            <br />
            <button>Make Post</button>
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
