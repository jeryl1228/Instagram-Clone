import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React, { useContext } from "react";
import { UserContext } from "../App";
import ProfileIcon from "../ProfileIcon";
import "./ProfilePage.css";

function ProfileHeader() {
  const user = useContext(UserContext);

  return (
    <header>
      {user ? (
        <div className="container-pp">
          <div className="profile-pp">
            <div className="profile-image-pp">
              <Avatar
                className="postAvatar profile-photo-pp"
                alt={user.displayName}
                src="/static/images/avatar/1.jpg"
                sx={{ width: 150, height: 150, bgcolor: deepOrange[500] }}
              />
            </div>

            <div className="profile-user-settings-pp">
              <h1 className="profile-user-name-pp">{user.displayName}</h1>

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
              <p className="profile-real-name-pp">{user.displayName}</p>
              <p className="profile-bio-info-pp">
                Coder by Day, Tiktoker by Night📷✈️🏕️
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-pp">
          <div className="profile-pp">
            <div className="profile-image-pp">
              <Avatar
                className="postAvatar profile-photo-pp"
                alt="John Doe"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 150, height: 150, bgcolor: deepOrange[500] }}
              />
            </div>

            <div className="profile-user-settings-pp">
              <h1 className="profile-user-name-pp">johndoee</h1>

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
                  <span className="profile-stat-count-pp">20</span> posts
                </li>
                <li>
                  <span className="profile-stat-count-pp">0</span> followers
                </li>
                <li>
                  <span className="profile-stat-count-pp">0</span> following
                </li>
              </ul>
            </div>

            <div className="profile-bio-pp">
              <p className="profile-real-name-pp">John Doe</p>
              <p className="profile-bio-info-pp">help</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default ProfileHeader;
