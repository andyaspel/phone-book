import { useState } from "react";
import "./App.css";
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
  // const [isActive, setActive] = useState("true");

  // function checkName(str, arr) {
  //   arr.filter((i) => {
  //     if (i.name === str) {
  //       console.log(false);
  //       return "name already exist!!";
  //     }
  //     return null;
  //   });
  // }
  // let id = persons[persons.length - 1].id;
  // let nameError = "";

  const handleChange = ({ target }) => {
    let { name, value } = target;
    let id = persons[persons.length - 1].id;
    let nameError = "";
    let toggle = null;
    name = name.substr(11);
    persons.filter((i) => {
      if (i.name === value) {
        nameError = "name already exists!!";
        toggle = "name-error";
        // setActive(!isActive);
        return setFormData({ errormsg: nameError, isActive: toggle });
      }
      console.log(formData);

      return formData;
    });

    setFormData({
      ...formData,
      [name]: value,
      id: id + 1,
      errormsg: nameError,
      isActive: toggle,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!checkName(formData.name, persons)) {
    //   return ;
    // }
    setPersons((prev) => {
      setFormData({ name: "", number: "", id: null, errormsg: "" });
      return [...prev, formData];
    });
  };
  console.log(formData.isActive);
  return (
    <div className="app-cont">
      <h1>Phone book</h1>
      <p>search person</p>
      <PersonFiltered person={persons} />
      <h2>Add new contact</h2>
      <PersonForm
        isActive={formData.isActive}
        onSubmit={handleSubmit}
        onChange={handleChange}
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
