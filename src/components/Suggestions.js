import React from 'react'
import "../styles/suggestions.scss"
import Profile from "./Profile"

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="titleContainer">
        <div className="title">Suggestions for you</div>
        <a href="/">See All</a>
      </div>

      <Profile 
      caption="Followed by Knight + 83 more" 
      urlText="Follow" 
      iconSize="medium" 
      captionSize="small" 
      storyBorder={true}
      />
      <Profile 
      caption="Followed by Spade + 53 more" 
      urlText="Follow" 
      iconSize="medium" 
      captionSize="small" 
      storyBorder={true}
      />
      <Profile 
      caption="Followed by Heart + 31 more" 
      urlText="Follow" 
      iconSize="medium" 
      captionSize="small" 
      storyBorder={true}
      />
      <Profile 
      caption="Followed by Flush + 62 more" 
      urlText="Follow" 
      iconSize="medium" 
      captionSize="small" 
      storyBorder={true}
      />
    </div>
  )
}

export default Suggestions