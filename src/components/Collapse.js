import React, { useState } from "react";
import './Collapse.scss';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-title" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <svg
          className={`arrow ${isOpen ? "rotate" : ""}`}
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
        </svg>
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {content}
      </div>
    </div>
  );
};

export default Collapse;
