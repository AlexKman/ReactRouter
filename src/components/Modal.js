import React, { Component } from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        <div className="header">Delete stream</div>
        <div className="content">Are you sure dude?</div>
        <div className="actions">
          <button className="ui primary button">Delete</button>
          <button className="ui negative button">Cancel</button>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
