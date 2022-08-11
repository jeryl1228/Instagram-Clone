import React, { useContext } from "react";
import PropTypes from "prop-types";
import { formatRelative } from "date-fns";
import { Avatar } from "@mui/material";
import { UserContext } from "../App";

const formatDate = (date) => {
  let formattedDate = "";
  if (date) {
    // Convert the date in words relative to the current date
    formattedDate = formatRelative(date, new Date());
    // Uppercase the first letter
    formattedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }
  return formattedDate;
};

const Message = ({
  createdAt = null,
  text = "",
  displayName = "",
  photoURL = "",
}) => {
  if (!text) return null;

  // const user = useContext(UserContext);
  return (
    <div className="px-4 py-4 rounded-md hover:bg-gray-50 dark:hover:bg-coolDark-600 overflow-hidden flex items-start ">
      <div className="profileContainer">
        <Avatar
          className="messageAvatar"
          alt={displayName}
          src="/static/images/avatar/1.jpg"
        />
        <div className="flex items-center mb-1">
          {displayName ? (
            <p className="chatName mr-2 text-primary-500">{displayName}</p>
          ) : null}
        </div>
      </div>
      <p className="message">{text}</p>
      {createdAt?.seconds ? (
        <span className="timePosted text-gray-500 text-xs">
          {formatDate(new Date(createdAt.seconds * 1000))}
        </span>
      ) : null}

      <hr></hr>
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.string,
  createdAt: PropTypes.shape({
    seconds: PropTypes.number,
  }),
  displayName: PropTypes.string,
  photoURL: PropTypes.string,
};

export default Message;
