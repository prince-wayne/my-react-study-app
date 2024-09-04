import { useState } from "react";
import Task from "./Task";

export default function Tasks() {
  /* 
    this is a list of tasks that are added in dymatically, once we use our add btn 
  */

  const [tasks, setTasks] = useState(["task 1", "task 2"]);

  function handleClickOnAdd() {
    let value = document.getElementById("task-input").value;
    const add = value; // this counts as our updater function review for those that are wondering

    setTasks((t) => [...t, ` ${add.trim()} `]);
    document.getElementById("task-input").value = "";

    // we should make the input accept this on enter
  }

  function handleInputEnterkey(e) {
    if (e.key === 'Enter') {
      handleClickOnAdd();
    }
  }

  function hanldeClickOnDRemove(e) {
    const li = e.target.parentElement.parentElement; // the current li element
    const compare = li.children[0].innerText; // the text value of the li element (exculding the btns)

    setTasks((t) => t.filter((element) => element.trim() !== compare.trim()));
  }

  function hanldeClickOnDone(e) {
    const li = e.target.parentElement.parentElement; // the current li element
    const text  = li.children[0]; // the text value of the li element (exculding the btns)
    if (text.style.textDecoration === "line-through") {
      text.style.textDecoration = "none"
      li.style.opacity = "1";
    } else {
      text.style.textDecoration = "line-through";
      li.style.opacity = "0.50";
    }
 
    // this done function will require us to make the tasks an array of objects which will exceed the spoce of this review. Our solution will be to create an updated version of this compondent to cover that topic. 

  }

  return (
    <>
      {/* input box */}
      <h2>Task Manager</h2>
      <div>
        <input onKeyDown={handleInputEnterkey}  id="task-input" type="text" placeholder="Add a task" />
        <button onClick={handleClickOnAdd}> Add Task </button>
      </div>

      {/* task list */}
      <ul>
        {tasks.map((element, index) => (
          <Task
            done={hanldeClickOnDone}
            remove={hanldeClickOnDRemove}
            key={index}
          >
            {` ${element.trim()} `}
          </Task>
        ))}
      </ul>
    </>
  );
}
