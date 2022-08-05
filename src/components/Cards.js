import React from 'react'
import '../styles/cards.scss';
import Stories from "./Stories";
import Card from "./Card";

function Cards() {
  const commentsOne = [
    {
      user: "Knight",
      text: "Sick!",
      id: 1
    },
    {
      user: "Dancer",
      text: "Amazing",
      id: 2
    },
    {
      user: "Rook",
      text: "Marvelous!",
      id: 3
    }
  ];

  const commentsTwo = [
    {
      user: "Melty",
      text: "Sheesh",
      id: 4
    },
    {
      user: "Rose",
      text: "Better than mine",
      id: 5
    },
    {
      user: "Helen",
      text: "Uhmmm",
      id: 6
    }
  ];

  const commentsThree = [
    {
      user: "Melany",
      text: "I could do better",
      id: 7
    },
    {
      user: "Christy",
      text: "Wow",
      id: 8
    },
    {
      user: "Sven",
      text: "Hmph",
      id: 9
    }
  ];
    
  return (
    <div className="cards">
        <Stories />
        
        <Card accountName="Knight" 
        storyBorder={true} 
        image="https://picsum.photos/600/550" 
        comments={commentsOne} 
        likedByText="Rose" 
        likedByNumber={`2 others`} 
        hours={16}/>

        <Card accountName="Rose" 
        storyBorder={true} 
        image="https://picsum.photos/600/500" 
        comments={commentsTwo} 
        likedByText="Rose" 
        likedByNumber={`4 others`} 
        hours={6}/>

        <Card accountName="Melty" 
        storyBorder={true} 
        image="https://picsum.photos/600" 
        comments={commentsThree} 
        likedByText="Rose" 
        likedByNumber={`89 others`} 
        hours={12}/>

    </div>
  )
}

export default Cards