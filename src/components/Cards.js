import React, { useEffect, useState } from "react";
import "../styles/cards.scss";
import Stories from "./Stories";
import Card from "./Card";
import { db } from "../data/firebaseConfig";

function Cards() {
  const [cards, setCard] = useState([]);

  useEffect(() => {
    db.collection("card").onSnapshot((snapshot) => {
      setCard(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          card: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="cards">
      <Stories />

      {cards.map(({ id, card }) => (
        <Card
          key={id}
          accountName={card.accountName}
          storyBorder={card.storyBorder}
          image={card.image}
          likedByText={card.likedByText}
          likedByNumber={card.likedByNumber}
          hours={card.hours}
          description={card.description}
        />
      ))}
    </div>
  );
}

export default Cards;
