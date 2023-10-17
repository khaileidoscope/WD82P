import { useState } from "react";
import "./App.css";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
  const [selected, setSelected] = useState(0);
  const [mostVoted, setMostVoted] = useState(0);

  const handleNextAnecdote = () =>
    setSelected(Math.floor(Math.random() * (anecdotes.length - 1)));

  const handleVote = () => {
    points[selected] = points[selected] + 1;
    setMostVoted(findAnecdoteWithMostVotes());
  };

  const findAnecdoteWithMostVotes = () => {
    const pointsArr = Object.values(points);
    const anecdoteWithMostVotes = pointsArr.findIndex(
      (point) => point === Math.max(...pointsArr)
    );

    return anecdoteWithMostVotes;
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>

      <p>{anecdotes[selected]}</p>

      <button onClick={handleVote}>vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>

      <h1>Anecdote with most votes</h1>
      {anecdotes[mostVoted]}
    </div>
  );
}

export default App;