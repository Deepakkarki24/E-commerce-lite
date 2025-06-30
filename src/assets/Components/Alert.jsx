import React from "react";
import { RxCross2 } from "react-icons/rx";

const Alert = ({ handleAlert }) => {
  return (
    <div className="alertBox" onClick={handleAlert}>
      <RxCross2 style={{ color: "white" }} />
      <h4>Succesfully Added</h4>
    </div>
  );
};

export default Alert;
