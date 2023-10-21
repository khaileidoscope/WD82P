import "./Person.css"
import personService from "../services/persons";

function Person({ contact, contacts, results, setContacts, setResults }) {
  const { id, name, number } = contact;

  const handleDelete = (id) => {
    personService.deleteContact(id).then((response) => {
      if (response.status === 200) {
        const updatedContacts = contacts.filter((contact) => contact.id !== id);

        setContacts(updatedContacts);
        setResults(updatedContacts);
      } else {
        console.log("No such contact");
      }
    });
  };

  return (
    <li key={id}>
      <button onClick={() => handleDelete(id)}>x</button> {name} {number}
    </li>
  );
}

export default Person;
