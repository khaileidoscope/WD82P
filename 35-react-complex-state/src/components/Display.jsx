function Display({ value, text }) {
  return (
    <div>
      <p>
        <span>{text} </span>
        {value}
      </p>
    </div>
  );
}

export default Display;
