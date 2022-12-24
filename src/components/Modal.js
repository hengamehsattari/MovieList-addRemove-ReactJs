import ReactDOM from "react-dom";
import React from "react";
import "./modal.css";

export const Modal = (props) => {
  const { explanation, closeModal } = props;
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modalBox">
        <div className="header">
          <button className="closebutton" onClick={closeModal}> X بستن</button>
          <span>توضیحات</span>
        </div>
        <p>{explanation}</p>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
