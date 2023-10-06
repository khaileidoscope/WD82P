function History({ allClicks }) {
  if (allClicks.length === 0) {
    return <p>The app is used by pressing the buttons</p>;
  }

  return <p>button press history: {allClicks.join("")}</p>;
}

export default History;
