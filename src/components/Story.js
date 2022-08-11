import React from "react";
import "../styles/story.scss";
import ProfileIcon from "./ProfileIcon";
import users from "../data/users";

function Story() {
  let accountName = users[Math.floor(Math.random() * users.length)].username;

  if (accountName.length > 10) {
    accountName = accountName.substring(0, 10) + "...";
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let randomId = getRandomInt(1, 70);
  const profileImage = `https://i.pravatar.cc/150?img=${randomId}`;

  return (
    <div className="story">
      <ProfileIcon iconSize="big" storyBorder={true} image={profileImage} />
      <span className="accountName">{accountName}</span>
    </div>
  );
}

export default Story;
