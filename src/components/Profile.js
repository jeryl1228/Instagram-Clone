import React, { useContext } from "react";
import "../styles/profile.scss";
import ProfileIcon from "./ProfileIcon";
import users from "../data/users";
import { UserContext } from "./App";
import DefaultIcon from "../images/defaulticon.jpeg";
import { Avatar } from "@mui/material";

function Profile(props) {
  const {
    username,
    caption,
    urlText,
    iconSize,
    captionSize,
    storyBorder,
    hideAccountName,
    image,
  } = props;

  const user = useContext(UserContext);

  let accountName = username
    ? username
    : users[Math.floor(Math.random() * users.length)].username;

  return (
    <div className="profile">
      {user ? (
        <div>
          <Avatar
            className="postAvatar"
            alt={username}
            src="/static/images/avatar/1.jpg"
          />
          <br></br>
          {(accountName || caption) && !hideAccountName && (
            <div className="textContainer">
              <span className="accountName">{username}</span>
              <span className={`caption ${captionSize}`}>{caption}</span>
            </div>
          )}
          <a href="/">{urlText}</a>
        </div>
      ) : (
        <div>
          <Avatar
            className="postAvatar"
            alt={username}
            src="/static/images/avatar/1.jpg"
          />
          <br></br>
          {(accountName || caption) && !hideAccountName && (
            <div className="textContainer">
              <span className="accountName">{username}</span>
              <span className={`caption ${captionSize}`}>{caption}</span>
            </div>
          )}
          <a href="/">{urlText}</a>
        </div>
      )}
    </div>
  );
}

export default Profile;
