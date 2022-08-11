import React, { useContext } from "react";
import "../styles/menu.scss";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Inbox } from "../images/inbox.svg";
import { ReactComponent as Notifications } from "../images/notifications.svg";
import CreatePost from "./CreatePost";
import ProfileIcon from "./ProfileIcon";

import DefaultIcon from "../images/defaulticon.jpeg";

import Login from "./Login";
import { UserContext } from "./App";
import { Avatar } from "@mui/material";

function Menu({ image, setUser }) {
  const user = useContext(UserContext);

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
      {user ? (
        <a href="/profile">
          <Avatar
            className="postAvatar"
            alt={user.displayName}
            src="/static/images/avatar/1.jpg"
            sx={{ width: 23, height: 23 }}
          />
        </a>
      ) : (
        <a href="/profile">
          <ProfileIcon iconSize="small" image={DefaultIcon} />
        </a>
      )}

      <p>|</p>
      <Login setUser={setUser} />
    </div>
  );
}

export default Menu;
