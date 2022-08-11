import React, { useEffect, useState, useContext } from "react";
import "../styles/cards.scss";
import Stories from "./Stories";
import Card from "./Card";
import { db } from "../data/firebaseConfig";
import { UserContext } from "./App";

function Cards() {
  const [cards, setCard] = useState([]);
  const user = useContext(UserContext);

  useEffect(() => {
    db.collection("card").orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
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
          cardId={id}
          accountName={card.username}
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
