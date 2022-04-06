import React from "react";
import "./personStyle.css";

function Person({ id, name, number }) {
  return (
    <li key={id}>
      <p className="person-list">
        {name} - {number}
      </p>
    </li>
  );
}

export default Person;
