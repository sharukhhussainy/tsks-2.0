import React, { useState } from "react";
import CreateNewCollection from "../CreateNewCollection/createNewCollection.component";
import CustomButton from "../CustomButton/customButton.component";
import "./collections.styles.css";

const Collections = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="collection-container">
      <div className="collections">
        <p className="title">You have no collections.</p>
        <CustomButton onOpen={() => setIsOpen(true)} />
      </div>
      <CreateNewCollection isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};
export default Collections;
