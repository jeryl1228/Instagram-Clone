import React, { useContext } from "react";
import "../../styles/app.scss";
import App, { UserContext } from "../App";
import Navigation from "../Navigation";
import ProfileHeader from "./ProfileHeader";
import ProfilePhotos from "./ProfilePhotos";

function ProfileMain({ setUser }) {
  const user = useContext(UserContext);

  return (
    <div className="App">
      <Navigation setUser={setUser} />
      <ProfileHeader />
      <ProfilePhotos />
      <main></main>
    </div>
  );
}

export default ProfileMain;
