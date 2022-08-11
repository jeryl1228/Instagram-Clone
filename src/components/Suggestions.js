import React from "react";
import "../styles/suggestions.scss";
import Profile from "./Profile";
import ElonMusk from "../images/elonmusk.jpeg";
import Sundar from "../images/sundarpichai.jpeg";
import Steve from "../images/stevejobs.jpeg";
import Mark from "../images/mark.jpeg";
import ProfileIcon from "./ProfileIcon";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="titleContainer">
        <div className="title">Suggestions for you</div>
        <a href="/Home">See All</a>
      </div>
      <div className="suggestedprof">
        <ProfileIcon image={Sundar} iconSize="medium" />
        <p>
          <strong>SundarPichai</strong> <br></br>Followed by Flash + 20 more
        </p>
        <a href="/" className="follow">
          Follow
        </a>
      </div>
      <div className="suggestedprof">
        <ProfileIcon image={ElonMusk} iconSize="medium" />
        <p>
          <strong>elonmusk</strong> <br></br>Followed by mxvd12 + 33 more
        </p>
        <a href="/" className="follow">
          Follow
        </a>
      </div>
      <div className="suggestedprof">
        <ProfileIcon image={Mark} iconSize="medium" />
        <p>
          <strong>markzuckerberg</strong> <br></br>Followed by Mom
        </p>
        <a href="/" className="follow">
          Follow
        </a>
      </div>
      <div className="suggestedprof">
        <ProfileIcon image={Steve} iconSize="medium" />
        <p>
          <strong>stevejobs</strong> <br></br>Followed by johnnn + 15 more
        </p>
        <a href="/" className="follow">
          Follow
        </a>
      </div>
    </div>
  );
}

export default Suggestions;
