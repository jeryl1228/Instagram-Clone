import React from "react";
import "../styles/cardmenu.scss";
import { ReactComponent as Inbox } from "../images/inbox.svg";
import { ReactComponent as Comments } from "../images/comments.svg";
import { ReactComponent as Notifications } from "../images/notifications.svg";
import { ReactComponent as Bookmark } from "../images/bookmark.svg";
import Like from "./Like";

function CardMenu() {
  return (
    <div className="cardMenu">
      <div className="interactions">
        {/* <Notifications className="icon" /> */}
        <Like className="icon heart" />
        <Comments className="icon" />
        <Inbox className="icon" />
      </div>
      <Bookmark className="icon" />
    </div>
  );
}

export default CardMenu;
