import React from "react";

const CourseInfoModal = ({ isOpen, closeModal, children }) => {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      {children}
      <button onClick={closeModal}>Close Modal</button>
    </div>
  );
};

export default CourseInfoModal;
