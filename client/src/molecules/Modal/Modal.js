import React from "react";
import "./Modal.scss";

const Modal = ({ visibilityHandler }) => {
  return (
    <>
      <div className="modal__overlay" onClick={visibilityHandler}></div>
      <div className="modal">
        <h1>hello from</h1>
      </div>
    </>
  );
};

export default Modal;
