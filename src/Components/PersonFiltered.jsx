import React from "react";
import "./personStyle.css";

function PersonFiltered({ value, onChange }) {
  return (
    <form>
      <label htmlFor="filter-contacts">Search: </label>
      <input
        id="filter-contacts"
        name="filter-contacs"
        value={value}
        type="search"
        onChange={onChange}
      />
    </form>
  );
}

export default PersonFiltered;
