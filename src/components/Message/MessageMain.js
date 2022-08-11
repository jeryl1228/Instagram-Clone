import React, { useContext } from "react";
import "./index.css";
import MessageApp from "./MessageApp";
import Navigation from "../Navigation";

function MessageMain({ setUser }) {
  return (
    <React.StrictMode>
      <Navigation setUser={setUser} />
      <MessageApp />
    </React.StrictMode>
  );
}

export default MessageMain;
