/*
TODO: VALIDATION OF INPUT DATA
*/

import { useState } from "react";
import "./App.css";
import "./Components/personStyle.css";
import Person from "./Components/Person";
import PersonForm from "./Components/PersonForm";
import PersonFiltered from "./Components/PersonFiltered";

function App() {
  let data = [
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ];
  const [persons, setPersons] = useState([...data]);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    id: null,
    errormsg: "",
    isActive: null,
  });
  const [searchTerm, setSearchTerm] = useState({
    name: "",
    errormsg: "",
    isActive: null,
  });

  const checkInfo = ({ target }) => {
    let { name, value } = target;
    let id = persons[persons.length - 1].id;
    let nameError = "";
    let toggle = null;
    name = name.substr(11);
    persons.filter((i) => {
      if (i.name.toLowerCase() === value.toLocaleLowerCase()) {
        nameError = "name already exists!!";
        toggle = "name-error";
        return setFormData({
          ...formData,
          [name]: value,
          errormsg: nameError,
          isActive: toggle,
        });
      }
      return setFormData({
        ...formData,
        [name]: value,
        id: id + 1,
        errormsg: nameError,
        isActive: toggle,
      });
    });
  };

  const filterValue = ({ target }) => {
    let { value } = target;
    let test = [];
    let nameError = "";
    let toggle = null;
    setSearchTerm({
      name: value,
    });
    persons.filter((i) => {
      if (i.name.toLowerCase().includes(value.toLocaleLowerCase())) {
        test = [...test, i];
        return setPersons([...test]);
      }
      if (test.length < 1) {
        nameError = "name not found, sorry!!";
        toggle = "name-error";
        setSearchTerm({
          name: value,
          errormsg: nameError,
          isActive: toggle,
        });
        return setPersons([...data]);
      }
      return setPersons([...test]);
    });
  };

  const addInfo = (e) => {
    e.preventDefault();
    const contact = {
      name: formData.name,
      number: formData.number,
      id: persons.length + 1,
    };
    setPersons([...persons, contact]);
    return setFormData({
      name: "",
      number: "",
      id: null,
      errormsg: "",
      isActive: null,
    });
  };
  const clearFilter = (e) => {
    e.preventDefault();
    setPersons([...data]);
    return setSearchTerm({ name: "" });
  };

  return (
    <div className="app-cont">
      <h1>Phone book</h1>
      <p>search person</p>
      <PersonFiltered
        handleChange={filterValue}
        text={searchTerm.name}
        handleSubmit={clearFilter}
        isActive={searchTerm.isActive}
        errormsg={searchTerm.errormsg}
      />
      <h2>Add new contact</h2>
      <PersonForm
        isActive={formData.isActive}
        handleSubmit={addInfo}
        handleChange={checkInfo}
        numberValue={formData.number}
        nameValue={formData.name}
        errormsg={formData.errormsg}
      />
      <h3>List of contacts</h3>
      <ul>
        {persons.map((person) => {
          return (
            <Person name={person.name} key={person.id} number={person.number} />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
