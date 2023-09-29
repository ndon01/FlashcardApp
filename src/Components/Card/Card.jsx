// Import necessary modules and components
import React, { useEffect, useState } from "react";
import styles from "./Card.module.css"; // Import CSS module for styling

// Define the Card component
function Card({ Word, Definition, showWord = true }) {
  // Initialize state to manage whether the "front" or "back" side is displayed
  const [showingWord, setShowingWord] = useState(showWord === false ? false : true);

  // Use the useEffect hook to reset the display to the "front" side when the word changes
  useEffect(() => {
    setShowingWord(true);
  }, [Word]);

  return (
    <>
      {/* Card container with click event to toggle between sides */}
      <div className={styles.Card} onClick={() => setShowingWord(!showingWord)}>
        {/* Card inner container with conditional styling for flip animation */}
        <div className={styles.CardInner} style={showingWord ? {} : { "transform": "rotateY(180deg)" }}>
          {/* "Front" side of the card displaying the Word */}
          <div className={styles.CardFront}>
            <p className={styles.CardText}>{Word}</p>
          </div>
          {/* "Back" side of the card displaying the Definition */}
          <div className={styles.CardBack}>
            <p className={styles.CardText}>{Definition}</p>
          </div>
        </div>
      </div>
    </>
  );
}

// Export the Card component as the default export
export default Card;
