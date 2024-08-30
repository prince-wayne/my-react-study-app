export default function Task(props) {
    const hanldeClickOnDRemove = props.remove;
    const hanldeClickOnDone = props.done;

  return (
      <li>
        <span>
            {props.children}
        </span>
        <span className="li-btns">
          {/* done btn */}
          {/*
           <button onClick={hanldeClickOnDone}> Done </button>
           // this is a future update. 
           */}
          {/* remove btn */}
          <button onClick={hanldeClickOnDRemove}> Remove</button>
        </span>
      </li>
  );
}
