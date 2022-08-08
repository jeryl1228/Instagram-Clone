import React from "react";
import "../styles/card.scss";
import Profile from "./Profile";
import { ReactComponent as CardButton } from "../images/cardButton.svg";
import CardMenu from "./CardMenu.js";
import Comment from "./Comment";

function Card(props) {
  const { accountName, storyBorder, image, likedByText, likedByNumber, hours } =
    props;

  return (
    <div className="card">
      <header>
        <Profile
          iconSize="medium"
          storyBorder={storyBorder}
          username={accountName}
        />
        <CardButton className="cardButton" />
      </header>
      <img className="cardimage" src={image} alt="card content" />
      <CardMenu />
      <div className="likedBy">
        <Profile iconSize="small" hideAccountName={true} />
        <span>
          Liked by <strong>{likedByText}</strong> and{" "}
          <strong>{likedByNumber}</strong>
        </span>
      </div>
      <div className="timePosted">{hours} HOURS AGO</div>
      <div className="addComment">
        <div className="commentText">Add a comment...</div>
        <div className="postText">POST</div>
      </div>
    </div>
  );
}

export default Card;
