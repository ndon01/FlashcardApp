// Import necessary modules and components
import React, { useEffect, useState } from "react";
import Card from "../Components/Card/Card";
import Topbar from "../Components/Topbar/Topbar";

// Define an array of definitions
const definitions = [
  "Algorithm: A step-by-step procedure or set of rules to solve a specific problem or perform a task in a finite number of steps.",
  "Variable: A container that holds data or values that can be changed during the execution of a program.",
  "Function: A reusable block of code that performs a specific task or set of tasks.",
  "Array: A data structure that stores a collection of values or elements, each identified by an index or a key.",
  "Object: A composite data type that stores key-value pairs and is used to represent real-world entities and their properties.",
  "Boolean: A data type that represents one of two values: true or false, typically used for logical operations.",
  "String: A data type that represents a sequence of characters, such as text.",
  "Conditional Statement: A programming construct that allows you to execute different code blocks based on a specified condition.",
  "Loop: A control structure6 that allows you to repeatedly execute a block of code until a certain condition is met.",
  "DOM (Document Object Model): A programming interface for HTML and XML documents, representing the structure of a document as a tree of objects.",
];

// Define the ViewCards component
function ViewCards() {
  // Initialize state variables using useState
  const [cards, setCards] = useState([]); // State to store flashcards
  const [currentIndex, setIndex] = useState(0); // State to track the current flashcard index
  const [showingWord, setShowingWord] = useState(true); // State to toggle between showing word/definition
  const [currentWord, setCurrentWord] = useState([]); // State to store the current word

  // useEffect to run code when the component mounts
  useEffect(() => {
    let newCards = definitions.map((definition) => {
      let [Word, Definition] = definition.split(":");
      return {
        Word: Word.trim(),
        Definition: Definition.trim(),
      };
    });
    setCards(newCards);
  }, []);

  return (
    <>
      {/* Render the Topbar component */}
      <Topbar />

      {/* Page */}
      <div className="Page">
        {/* Card */}
        {cards.length === 0 ? ( // Conditionally render based on whether there are cards
          <Card Word="No Words" Definition="No Definitions" />
        ) : (
          <Card
            Word={cards[currentIndex].Word}
            Definition={cards[currentIndex].Definition}
          />
        )}

        {/* Buttons */}
        <div className="ChangeCardArea">
          {/* Backwards */}
          <div>
            <button
              className="Button"
              onClick={() => {
                if (currentIndex - 1 < 0) {
                  setIndex(cards.length - 1);
                } else {
                  setIndex(currentIndex - 1);
                }
              }}
            >
              {"<"}
            </button>
          </div>
          <p className="indexMarker">
            {cards.length === 0 ? 0 : currentIndex + 1}/{cards.length}
          </p>
          {/* Forwards */}
          <div>
            <button
              className="Button"
              onClick={() => {
                if (currentIndex + 1 >= cards.length) {
                  setIndex(0);
                } else {
                  setIndex(currentIndex + 1);
                }
              }}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// Export the ViewCards component as the default export
export default ViewCards;
