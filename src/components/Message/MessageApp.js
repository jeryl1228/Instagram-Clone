import React, { useContext } from "react";
// Firebase deps
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Hooks
import { useAuthState } from "./hooks";
// Components
import Channel from "./Channel";
import Loader from "./Loader";
import "./MessageApp.css";
import { UserContext } from "../App";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAXzhyDoYOso-l7M7fIsMviASgSLa326Bk",
    authDomain: "instagram-clone-4b0bb.firebaseapp.com",
    projectId: "instagram-clone-4b0bb",
    storageBucket: "instagram-clone-4b0bb.appspot.com",
    messagingSenderId: "1026270268540",
    appId: "1:1026270268540:web:3eaf5325b7a7466faa0df9",
  });
}

function MessageApp() {
  const user = useContext(UserContext);
  const { initializing } = useAuthState(firebase.auth());

  const renderContent = () => {
    if (initializing) {
      return (
        <div className="flex items-center justify-center h-full">
          <Loader size="lg" />
        </div>
      );
    }

    if (user) return <Channel user={user} />;

    return (
      <div className="flex items-center justify-center shadow-md h-full">
        <div className="flex flex-col items-center justify-center max-w-xl w-full mx-4 p-8 rounded-md shadow-card bg-white dark:bg-coolDark-600 transition-all">
          <h2 className="mb-2 text-3xl flex items-center text-center">
            Clone Instagram Chat
          </h2>
          <p className="mb-8 text-lg text-center">
            The easiest way to chat with people all around the world.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-coolDark-500 dark:text-white transition-colors">
      <header
        className="flex-shrink-0 flex items-center justify-between px-4 sm:px-8 shadow-md"
        style={{ height: "var(--topbar-height)" }}
      ></header>
      <main
        className="flex-1"
        style={{ maxHeight: "calc(100% - var(--topbar-height))" }}
      >
        {renderContent()}
      </main>
    </div>
  );
}

export default MessageApp;
