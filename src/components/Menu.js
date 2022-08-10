import React from "react";
import "../styles/menu.scss";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Inbox } from "../images/inbox.svg";
import { ReactComponent as Notifications } from "../images/notifications.svg";
import CreatePost from "./CreatePost";
import ProfileIcon from "./ProfileIcon";

import Login from "./Login";

function Menu({ image }) {
  return (
    <div className="menu">
      <a href="/">
        <Home className="icon" />
      </a>
      <a href="/Inbox">
        <Inbox className="icon" />
      </a>
      <CreatePost className="icon btn-modal" />
      <a href="/Notifications">
        <Notifications className="icon" />
      </a>
      <a href="/profile">
        <ProfileIcon iconSize="small" image={image} />
      </a>
      <p>|</p>
      <Login />
    </div>
  );
}

export default Menu;
