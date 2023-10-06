import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";
import Heading from "./components/Heading";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  const voteGood = () => setGood(good + 1);
  const voteNeutral = () => setNeutral(neutral + 1);
  const voteBad = () => setBad(bad + 1);

  // inline component for statisctics
  const Statistics = (props) => {
    if (all === 0) {
      return <p>No feedback given</p>;
    }

    return (
      <div>
        <Display text="good" stats={good} />
        <Display text="neutral" stats={neutral} />
        <Display text="bad" stats={bad} />
        <Display text="all" stats={all} />
        <Display text="average" stats={average} />
        <Display text="positive" stats={`${positive}%`} />
      </div>
    );
  };

  return (
    <div>
      <Heading text="give feedback" />
      <Button text="good" handleClick={voteGood} />
      <Button text="neutral" handleClick={voteNeutral} />
      <Button text="bad" handleClick={voteBad} />

      <Heading text="statistics" />
      <Statistics />
    </div>
  );
}

export default App;
// test