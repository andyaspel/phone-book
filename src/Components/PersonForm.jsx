import React from "react";

function PersonForm({ errormsg, nameValue, numberValue, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="phone-book-name">Contact name: </label>
      <input
        id="phone-book-name"
        name="phone-book-name"
        value={nameValue}
        type="text"
        onChange={onChange}
      />
      <span> {errormsg}</span>
      <br />
      <label htmlFor="phone-book-name">Contact number: </label>
      <input
        id="phone-book-number"
        name="phone-book-number"
        value={numberValue}
        type="tel"
        onChange={onChange}
      />
      <br />
      <input type="submit" />
    </form>
  );
}

export default PersonForm;
