import React, { Component } from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">Egg</div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;