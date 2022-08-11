import React from "react";
import "./index.css";
import MessageApp from "./MessageApp";
import Navigation from "../Navigation";

function MessageMain() {
  return (
    <React.StrictMode>
      <Navigation />
      <MessageApp />
    </React.StrictMode>
  );
}

export default MessageMain;
