import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const numbers = [0, 7, 8, 9, 4, 5, 6, 1, 2, 3];

  const handleClick = (e) => {
    console.log(e.target.name);
    setResult(result.concat(e.target.name));
  };

  const calculate = () => {
    setResult(eval(result));
  };

  const clear = () => {
    setResult("");
  };

  const handleInputChange = (e) => {
    setResult(e.target.value);
  };

  return (
    <div>
      <input value={result} type="text" onChange={handleInputChange} />
      <button className="clear" onClick={clear}>
        C
      </button>
      <button className="equals" onClick={calculate}>
        =
      </button>
      <button name="+" className="add" onClick={handleClick}>
        +
      </button>
      <button name="-" className="subtract" onClick={handleClick}>
        -
      </button>
      <button name="*" className="multiply" onClick={handleClick}>
        *
      </button>
      <button name="/" className="divide" onClick={handleClick}>
        /
      </button>
      {numbers.map((number) => {
        if (number === 0) {
          return (
            <button
              name={number}
              className="zero"
              key={number}
              onClick={handleClick}
            >
              {number}
            </button>
          );
        }

        return (
          <button
            name={number}
            className="is-num"
            key={number}
            onClick={handleClick}
          >
            {number}
          </button>
        );
      })}
    </div>
  );
}

export default App;
