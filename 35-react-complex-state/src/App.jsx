import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";
import History from "./components/History";

function App() {
  // const [left, setLeft] = useState(0);
  // const [right, setRight] = useState(0);
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const [allClicks, setAllClicks] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1,
    };
    setClicks(newClicks);
    setAllClicks(allClicks.concat("L"));
    setTotal(newClicks.left + newClicks.right);
  };

  const handleRightClick = () => {
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1,
    };
    setClicks(newClicks);
    setAllClicks(allClicks.concat("R"));
    setTotal(newClicks.left + newClicks.right);
  };

  return (
    <div>
      <Display value={clicks.left} />
      <Button handleClick={handleLeftClick} text="left" />
      <Display value={clicks.right} />
      <Button handleClick={handleRightClick} text="right" />
      <History allClicks={allClicks} />
      <Display value={total} text="Total:" />
    </div>
  );
}

export default App;
