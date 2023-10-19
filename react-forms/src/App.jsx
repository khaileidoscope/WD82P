import { useState } from "react";
import "./App.css";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([
    { id: 1, text: "Wake up!", important: false },
    { id: 2, text: "Coffee", important: false },
    { id: 3, text: "Code", important: false },
  ]);

  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(false);
  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const addNote = (event) => {
    event.preventDefault();

    const addNote = {
      id: notes.length + 1,
      text: newNote,
      important: Math.random() < 0.5,
    };

    setNotes([...notes, addNote]);
    setNewNote("");

    console.log(addNote);
  };

  const handleNoteChange = (event) => {
    // console.log(event.target.value);
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h1>
        Notes{" "}
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "show important" : "show all"}
        </button>
      </h1>
      <ul>
        {notesToShow.map((note, index) => (
          <Note key={index} note={note.text} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default App;
