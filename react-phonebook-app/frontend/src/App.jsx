import React, { useState, useEffect } from "react";
import "./App.css";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import Search from "./components/Search";
import Notification from "./components/Notification";
import personService from "./services/persons";

function App() {
  const [contacts, setContacts] = useState([]);
  const [results, setResults] = useState(contacts);
  const [notification, setNotification] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    personService.getAll().then((response) => {
      setContacts(response.data);
      setResults(response.data);
    });
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="uwu">
      <div className="main-ctr">
        <h4>
          <i className="ri-contacts-book-line"></i> Phonebook App
        </h4>

        <div className="add-contact-ctr">
          <h5>Contacts</h5>
          <button className="button open-button" onClick={openModal}>
            + Add Contact
          </button>
        </div>
        <Search contacts={contacts} setResults={setResults} />

        <dialog className="modal" open={isModalOpen}>
          <div className="modal-ctr">
            <div className="modal-details">
              <h5>New Contact</h5>
              <button className="button close-button" onClick={closeModal}>
                <i className="ri-close-line"></i>
              </button>
            </div>

            <PersonForm
              contacts={contacts}
              setContacts={setContacts}
              setResults={setResults}
              setNotification={setNotification}
              results={results}
            />
            <Notification notification={notification} />
          </div>
        </dialog>

        <h2>result</h2>
        <ul>
          {results.map((contact) => (
            <Person
              key={contact.id}
              contact={contact}
              contacts={contacts}
              results={results}
              setContacts={setContacts}
              setResults={setResults}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
