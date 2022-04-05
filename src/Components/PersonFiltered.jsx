import React from "react";

function PersonFiltered({ value, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
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
