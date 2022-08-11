import React, { useContext } from "react";
import "../styles/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import profileImage from "../images/profile.jpg";
import { UserContext } from "./App";
import DefaultIcon from "../images/defaulticon.jpeg";

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
          <Profile caption="Username" iconSize="big" image={DefaultIcon} />
        )}

        <Suggestions />
        <Footer />
      </div>
    </Sticky>
  );
}

export default Sidebar;
