import { useState } from "react";
import "./App.css";

function App(props) {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: false,
      id: notes.length + 1,
    };
    setNotes(notes.concat(noteObject));
    setNewNote("");
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} type="text" />
        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default App;
