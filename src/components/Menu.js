import React from 'react'
import "../styles/menu.scss"
import {ReactComponent as Home} from "../images/home.svg"
import {ReactComponent as Inbox} from "../images/inbox.svg"
import {ReactComponent as Explore} from "../images/explore.svg"
import {ReactComponent as Notifications} from "../images/notifications.svg"
import image from "../images/profile.jpg"
import ProfileIcon from "./ProfileIcon";

function Menu() {
  return (
    <div className="menu">
        <a href="/Home"><Home className="icon" /></a>
        <a href="/Inbox"><Inbox className="icon" /></a>
        <a href="/Explore"><Explore className="icon" /></a>
        <a href="/Notifications"><Notifications className="icon" /></a>
        <ProfileIcon iconSize="small" image={image} />
    </div>
  )
}

export default Menu