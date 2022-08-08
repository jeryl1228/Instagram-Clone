import React from "react";
import "../../styles/app.scss";
import Navigation from "../Navigation";
import ProfileHeader from "./ProfileHeader";
import ProfilePhotos from "./ProfilePhotos";

function ProfileMain() {
  return (
    <div className="App">
      <Navigation />
      <ProfileHeader />
      <ProfilePhotos />
      <main></main>
    </div>
  );
}

export default ProfileMain;
