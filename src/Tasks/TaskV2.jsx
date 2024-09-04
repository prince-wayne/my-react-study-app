export default function Task(props) {
  const hanldeClickOnDRemove = props.remove;
  const hanldeClickOnDone = props.done;

  return (
    <li style={{ opacity: props.isDone ? 0.5 : 1 }}>
      <span style={{ textDecoration: props.isDone ? "line-through" : "none" }}>
        {props.children}
      </span>
      <span className="li-btns">
        {/* done btn */}
        <button onClick={hanldeClickOnDone}> Done </button>

        {/* remove btn */}
        <button onClick={hanldeClickOnDRemove}> Remove</button>
      </span>
    </li>
  );
}

// style={{ backgroundColor: isHighlighted ? 'yellow' : 'lightblue' }}
