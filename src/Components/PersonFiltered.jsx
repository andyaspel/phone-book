// import "./personStyle.css";

function PersonFiltered({
  isActive,
  errormsg,
  text,
  handleChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="filter-contacts">Search: </label>
      <input
        id="filter-contacts"
        name="filter-contacts"
        value={text}
        type="text"
        onChange={handleChange}
      />
      <p className={isActive}> {errormsg}</p>
    </form>
  );
}

export default PersonFiltered;
