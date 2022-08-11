import React, { useContext } from "react";
import "../styles/profile.scss";
import ProfileIcon from "./ProfileIcon";
import users from "../data/users";
import { UserContext } from "./App";
import DefaultIcon from "../images/defaulticon.jpeg";

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
          <ProfileIcon
            iconSize={iconSize}
            storyBorder={storyBorder}
            image={image}
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
          <ProfileIcon
            iconSize={iconSize}
            storyBorder={storyBorder}
            image={image}
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
