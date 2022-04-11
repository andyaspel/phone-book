function PersonForm({
  isActive,
  errormsg,
  nameValue,
  numberValue,
  handleChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit} className="addForm">
      <div>
        <label htmlFor="phone-book-name" className="add-label">
          Contact name:{" "}
        </label>
        <input
          id="phone-book-name"
          name="phone-book-name"
          value={nameValue}
          type="text"
          onChange={handleChange}
          className="add-input"
        />
        <p className={isActive}> {errormsg}</p>
      </div>
      <div>
        <label htmlFor="phone-book-name" className="add-label">
          Contact number:{" "}
        </label>
        <input
          id="phone-book-number"
          name="phone-book-number"
          value={numberValue}
          type="tel"
          onChange={handleChange}
          className="add-input"
        />
      </div>
      <input type="submit" />
    </form>
  );
}

export default PersonForm;
