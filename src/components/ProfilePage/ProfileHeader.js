import React from "react";
import ProfileIcon from "../ProfileIcon";
import "./ProfilePage.css";

function ProfileHeader() {
  return (
    <header>
      <div className="container-pp">
        <div className="profile-pp">
          <div className="profile-image-pp">
            <ProfileIcon className="profile-photo-pp" />
          </div>

          <div className="profile-user-settings-pp">
            <h1 className="profile-user-name-pp">jeryaa</h1>

            <button className="btn profile-edit-btn">Edit Profile</button>

            <button
              className="btn profile-settings-btn"
              aria-label="profile settings"
            >
              <i className="fas fa-cog" aria-hidden="true"></i>
            </button>
          </div>

          <div className="profile-stats-pp">
            <ul>
              <li>
                <span className="profile-stat-count-pp">164</span> posts
              </li>
              <li>
                <span className="profile-stat-count-pp">188</span> followers
              </li>
              <li>
                <span className="profile-stat-count-pp">206</span> following
              </li>
            </ul>
          </div>

          <div className="profile-bio-pp">
            <p>
              <span className="profile-real-name-pp">Jeryl Teo</span>
            </p>
            <span className="profile-bio-info-pp">
              Coder by Day, Tiktoker by Night📷✈️🏕️
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ProfileHeader;
