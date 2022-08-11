import React, { useContext } from "react";
import "../styles/card.scss";
import Profile from "./Profile";
import { ReactComponent as CardButton } from "../images/cardButton.svg";
import CardMenu from "./CardMenu.js";
import { UserContext } from "./App";
import ProfileIcon from "./ProfileIcon";

function Card(props) {
  const {
    accountName,
    storyBorder,
    image,
    likedByText,
    likedByNumber,
    hours,
    description,
  } = props;

  const user = useContext(UserContext);

  return (
    <div className="card">
      <header>
        <Profile
          iconSize="medium"
          storyBorder={storyBorder}
          username={accountName}
          className="headerProfile"
        />
        <CardButton className="cardButton" />
      </header>
      <img className="cardimage" src={image} alt="card content" />
      <CardMenu />
      <div className="likedBy">
        <ProfileIcon iconSize="small" hideAccountName={true} />
        <span>
          Liked by <strong>{likedByText}</strong> and{" "}
          <strong>{likedByNumber}</strong>
        </span>
      </div>
      <span className="caption">
        <strong className="captionName">{accountName}</strong> {description}
      </span>
      <div className="timePosted">{hours} HOURS AGO</div>
      <div className="addComment">
        <div className="commentText">Add a comment...</div>
        <div className="postText">POST</div>
      </div>
    </div>
  );
}

export default Card;
