import axios from "axios";
import "./PersonForm.css"
import { useState } from "react";
import personService from "../services/persons";

function PersonForm({
  setContacts,
  setResults,
  contacts,
  results,
  setNotification,
}) {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addContact = (event) => {
    event.preventDefault();

    const newNameObj = {
      id: contacts.length + 1,
      name: newName,
      number: newNumber,
    };

    personService.create(newNameObj).then((response) => {
      setContacts([...contacts, response.data]);
      setResults([...results, response.data]);
      setNotification(`Added ${response.data.name}`);

      setTimeout(() => {
        setNotification("");
      }, 3000);

      setNewName("");
      setNewNumber("");
    });
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <form className="form-ctr" onSubmit={addContact}>
      <div>
        <input
          value={newName}
          onChange={handleNewName}
          type="text"
          placeholder="enter fullname"
          required
        />
      </div>
      <div>
        <input
          value={newNumber}
          onChange={handleNewNumber}
          placeholder="enter phonenumber"
          required
        />
      </div>
      <button className="form-btn" type="submit">CREATE</button>
    </form>
  );
}

export default PersonForm;
