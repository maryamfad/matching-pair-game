import { useState } from "react";
import Card from "./card/card";
import "./flippable-card.css";
import { CSSTransition } from "react-transition-group";
const FlippableCard = ({ onClick, content, index, showFront }) => {
  console.log(showFront);

  const fruitNames = ["apple", "banana", "orange", "mango", "pear", "peach"];

  const [firstToCheck, setFirstToCheck] = useState(true);
  const [secondToCheck, setSecondToCheck] = useState(false);
  const [lastFlipped, setLastFlipped] = useState("");
  const [lastFlippedIndex, setLastFlippedIndex] = useState("");
  const [flippedCards, setFlippedCards] = useState([]);
let showFrontArr = []
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const [cards, setCards] = useState(() =>
    shuffleArray(fruitNames.concat(fruitNames))
  );

  const handleClick = (index) => {
    // console.log("clicked", index)
    setFirstToCheck(!firstToCheck);
    setSecondToCheck(!secondToCheck);

    if (firstToCheck) {
      let filppedCardsArray = [...flippedCards];
      filppedCardsArray[index] = true;
      setFlippedCards(filppedCardsArray);
    }
    if (secondToCheck) {
      let filppedCardsArray = [...flippedCards];

      filppedCardsArray[index] = true;
      setFlippedCards(filppedCardsArray);

      if (cards[index] === lastFlipped) {
        filppedCardsArray[index] = true;

        setFlippedCards(filppedCardsArray);
      } else {
        setTimeout(() => {
          let filppedCardsArray = [...flippedCards];
          filppedCardsArray[index] = false;
          filppedCardsArray[lastFlippedIndex] = false;
          setFlippedCards(filppedCardsArray);
        }, 1000);
      }
    }

    setLastFlipped(cards[index]);
    setLastFlippedIndex(index);
    showFrontArr=[...flippedCards]
    console.log("flippedCards", showFrontArr);
  };

  return (
    <div
      className="container"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "30px",
      }}
    >
      {cards.map((card, index) => (
        <div key={index} className="filppable-card-container">
          <CSSTransition
            in={showFrontArr[index]}
            timeout={300}
            classNames="flip"
          >
            <Card
              content={card}
              index={index}
              onClick={() => {
                handleClick(index);
              }}
            />
          </CSSTransition>
        </div>
      ))}
    </div>
  );
};

export default FlippableCard;
