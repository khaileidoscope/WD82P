import axios from "axios";
import { useState } from "react";
import personService from "../services/persons";

function PersonForm({ setContacts, setResults, contacts, results }) {
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
    <form onSubmit={addContact}>
      <div>
        name:{" "}
        <input value={newName} onChange={handleNewName} type="text" required />
      </div>
      <div>
        number:{" "}
        <input
          value={newNumber}
          onChange={handleNewNumber}
          type="number"
          required
        />
      </div>
      <button type="submit">add</button>
    </form>
  );
}

export default PersonForm;
