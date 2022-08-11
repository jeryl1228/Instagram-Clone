import React from "react";
import "../styles/suggestions.scss";
import Profile from "./Profile";
import ElonMusk from "../images/elonmusk.jpeg";
import Sundar from "../images/sundarpichai.jpeg";
import Steve from "../images/stevejobs.jpeg";
import Mark from "../images/mark.jpeg";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="titleContainer">
        <div className="title">Suggestions for you</div>
        <a href="/Home">See All</a>
      </div>

      <Profile
        username="SundarPichai"
        caption="Followed by Knight + 83 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={false}
        image={Sundar}
      />
      <Profile
        username="elonmusk"
        caption="Followed by Spade + 53 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={false}
        image={ElonMusk}
      />
      <Profile
        username="markzuckerberg"
        caption="Followed by Heart + 31 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={false}
        image={Mark}
      />
      <Profile
        username="SteveJobs"
        caption="Followed by Flush + 62 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={false}
        image={Steve}
      />
    </div>
  );
}

export default Suggestions;
