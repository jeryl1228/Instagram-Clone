import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import MessageApp from "./MessageApp";
import Navigation from "../Navigation";

// ReactDOM.render(
//   <React.StrictMode>
//     <MessageApp />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
function MessageMain() {
  return (
    <React.StrictMode>
      <Navigation />
      <MessageApp />
    </React.StrictMode>
  );
}

export default MessageMain;
