import React from "react";

function Person({ id, name, number }) {
  return (
    <li key={id}>
      <p>
        {name} - {number}
      </p>
    </li>
  );
}

export default Person;
