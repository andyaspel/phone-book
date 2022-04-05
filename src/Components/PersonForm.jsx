import React from "react";
import "./personStyle.css";

function PersonForm({ errormsg, nameValue, numberValue, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="addForm">
      <label htmlFor="phone-book-name" className="add-label">
        Contact name:{" "}
      </label>
      <input
        id="phone-book-name"
        name="phone-book-name"
        value={nameValue}
        type="text"
        onChange={onChange}
        className="add-input"
      />
      <span> {errormsg}</span>
      <br />
      <label htmlFor="phone-book-name" className="add-label">
        Contact number:{" "}
      </label>
      <input
        id="phone-book-number"
        name="phone-book-number"
        value={numberValue}
        type="tel"
        onChange={onChange}
        className="add-input"
      />
      <br />
      <input type="submit" />
    </form>
  );
}

export default PersonForm;
