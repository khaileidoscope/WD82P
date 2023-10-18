import { useState } from "react";
import "./App.css";

function App(props) {
  const [notes, setNotes] = useState(props.notes);

  const [courses, setCourse] = useState(props.courses);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>

      <h1>Web development curriculum</h1>
      <h2 key={courses.id}>{courses[0].name}</h2>
        {courses[0].parts.map((part) => (
          <p key={part.id}>{part.name} {part.exercises}</p>
        ))}
      <h3>total of {courses[0].parts.reduce((total, part) => total + part.exercises, 0)} exercises</h3>

      <h2 key={courses.id}>{courses[1].name}</h2>
      {courses[1].parts.map((part) => (
        <p key={part.id}>{part.name} {part.exercises}</p>
      ))}
      <h3>total of {courses[1].parts.reduce((total, part) => total + part.exercises, 0)} exercises</h3>
    </div>
  );
}

export default App;
