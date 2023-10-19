import { useState } from "react";

function Search({ contacts, setResults }) {
  const [filter, setFilter] = useState("");

  const handleFilter = (event) => {
    const query = event.target.value;
    setFilter(query);

    if (query === 0) {
      setResults(contacts);
    } else {
      const filteredContact = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredContact);
    }
  };

  return (
    <div>
      filer shown with{" "}
      <input value={filter} onChange={handleFilter} type="text" />
    </div>
  );
}

export default Search;
