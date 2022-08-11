import React, { useContext } from "react";
import "../styles/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import profileImage from "../images/profile.jpg";
import { UserContext } from "./App";
import { Avatar } from "@mui/material";

function Sidebar() {
  const user = useContext(UserContext);

  return (
    <Sticky topOffset={-80}>
      <div className="sidebar">
        {user ? (
          <Profile
            username={user.displayName}
            caption="Username"
            iconSize="big"
            image={profileImage}
          />
        ) : (
          <Avatar className="defaultAvatar" src="/broken-image.jpg" />
        )}

        <Suggestions />
        <Footer />
      </div>
    </Sticky>
  );
}

export default Sidebar;
