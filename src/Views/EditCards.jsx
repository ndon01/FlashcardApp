// Import necessary modules and components
import React from "react";
import Topbar from "../Components/Topbar/Topbar";
import Table from "../Components/Table/Table";
import styles from "../Styles/EditCardsPage.module.css"; // Import CSS module for styling

// Define the EditCards component
function EditCards() {
  return (
    <>
      {/* Commented out Topbar component */}
      {/*<Topbar />*/}
      <div className="Page">
        {/* Input Area */}
        <div className={styles.CardCreationContainer}>
          {/* Title for the card creation section */}
          <div className={styles.CardCreationTitle}>Create a Definition</div>
          <div className={styles.CardCreationBody}>
            {/* Input field for entering a word */}
            <div className={styles.CardCreationInputContainer}>
              <div className={styles.CardCreationInputTitle}>Word</div>
              <div>
                <input type="text" placeholder="Enter a Word"></input>
              </div>
            </div>
            {/* Textarea for entering a definition */}
            <div className={styles.CardCreationInputContainer}>
              <div className={styles.CardCreationInputTitle}>Definition</div>
              <div>
                <textarea
                  className={styles.DefinitionTextArea}
                  placeholder="Enter a Definition"
                ></textarea>
              </div>
            </div>
            {/* Button for creating a card */}
            <div className={styles.CardCreationInputContainer} id="1">
              <div
                className={styles.CardCreationInputTitle}
                style={{ visibility: "hidden" }}
              >
                Button
              </div>
              <button>Create</button>
            </div>
          </div>
        </div>
        {/* Table component */}
        <Table />
      </div>
    </>
  );
}

// Export the EditCards component as the default export
export default EditCards;
