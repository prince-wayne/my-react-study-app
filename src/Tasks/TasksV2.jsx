import { useState } from "react";
import TaskV2 from "./TaskV2";

export default function Tasks() {
  /* 
    this is a list of tasks that are added in dymatically, once we use our add btn 
  */

  // const [tasks, setTasks] = useState(["task 1", "task 2"]);
  const [tasks, setTasks] = useState([
    {
      name: "task 1",
      isDone: false,
    },
    {
      name: "task 2",
      isDone: false,
    },
    {
      name: "task 3",
      isDone: true,
    }
  ]);

  function handleClickOnAdd() {
    let value = document.getElementById("task-input-2").value;
    const add = value; // this counts as our updater function review for those that are wondering

    if (add.trim() === "") {
      window.alert("did you mean to give me an empty task? \nGo fix that for me");
      return; // just exits the function
    } 

    setTasks((t) => [
      ...t,
      {
        name: ` ${add.trim()} `,
        isDone: false,
      }
    ]);

    document.getElementById("task-input-2").value = "";
  }

  function handleInputEnterkey(e) {
    if (e.key === "Enter") {
      handleClickOnAdd();
    }
  }

  function hanldeClickOnDRemove(e) {
    const li = e.target.parentElement.parentElement; // the current li element
    const compare = li.children[0].innerText; // the text value of the li element (exculding the btns)

    setTasks((t) =>
      t.filter((element) => element.name.trim() !== compare.trim())
    );
  }

  function hanldeClickOnDone(e) {
    const li = e.target.parentElement.parentElement; // the current li element
    const text = li.children[0].innerText.trim(); // the text value of the li element (exculding the btns)

    // compare the text to the task array of objects
    // console.log(currentTask);
    setTasks((t) => 
      t.map((element) => {
        const currentTask = t.find(obj => obj.name.trim() === text);
        // t = whole arr, element = current index
        if (element.name === currentTask.name) {
          return {...element, isDone : !element.isDone};
        } 
        return element;
      })
    );
  }

  return (
    <>
      {/* input box */}
      <h2>Task Manager</h2>
      <div>
        <input
          onKeyDown={handleInputEnterkey}
          id="task-input-2"
          type="text"
          placeholder="Add a task"
        />
        <button onClick={handleClickOnAdd}> Add Task </button>
      </div>

      {/* task list */}
      <ul>
        {tasks.map((element, index) => (
          <TaskV2
            done={hanldeClickOnDone}
            remove={hanldeClickOnDRemove}
            key={index}
            isDone={element.isDone}
          >
            {` ${element.name.trim()} `}
          </TaskV2>
        ))}
      </ul>
    </>
  );
}
