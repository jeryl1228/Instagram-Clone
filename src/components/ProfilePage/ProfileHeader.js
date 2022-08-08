import React from "react";
import ProfileIcon from "../ProfileIcon";
import "./ProfilePage.css";

function ProfileHeader() {
  return (
    <header>
      <div className="container">
        <div className="profile">
          <div className="profile-image">
            <ProfileIcon className="profile-photo" />
          </div>

          <div className="profile-user-settings">
            <h1 className="profile-user-name">jeryaa</h1>

            <button className="btn profile-edit-btn">Edit Profile</button>

            <button
              className="btn profile-settings-btn"
              aria-label="profile settings"
            >
              <i className="fas fa-cog" aria-hidden="true"></i>
            </button>
          </div>

          <div className="profile-stats">
            <ul>
              <li>
                <span className="profile-stat-count">164</span> posts
              </li>
              <li>
                <span className="profile-stat-count">188</span> followers
              </li>
              <li>
                <span className="profile-stat-count">206</span> following
              </li>
            </ul>
          </div>

          <div className="profile-bio">
            <p>
              <span className="profile-real-name">Jeryl Teo</span>
            </p>
            <span className="profile-bio-info">
              Coder by Day, Tiktoker by Night📷✈️🏕️
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ProfileHeader;
