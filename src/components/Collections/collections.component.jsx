import React, { Component } from "react";
import CustomButton from "../CustomButton/customButton.component";
import "./collections.styles.css";

class Collections extends Component {
  render() {
    return (
      <div className="collection-container">
        <div className="collections">
          <p className="title">You have no collections.</p>
          <CustomButton />
        </div>
      </div>
    );
  }
}

export default Collections;
