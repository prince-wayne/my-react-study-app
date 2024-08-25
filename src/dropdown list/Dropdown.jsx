import "./Dropdown.css";

import { useState } from "react";

// Example of key parts (not full implementation)
function Dropdown(props) {
  // saves the original array
  const options = props.options;

  const handleOptionSelect = (event) => {
    // Update input field with selected option and close dropdown
    const dropdownInput = document.getElementById("dropdown-input");
    const dropdownList = document.getElementById("dropdown-list");

    dropdownInput.value = event.target.innerText;
    dropdownList.style.display = "none";
  };

  // useState to manage search query and filtered options
  const [items, setItems] = useState(
    options.map((value, index) => (
      <li key={index} onClick={handleOptionSelect}>
        {value}
      </li>
    ))
  );

  const handleInputChange = (event) => {
    // Update search query state based on user input
    const query = event.target.value; // good

    // Filter array items based on search criteria (query)
    function filterItems() {
      return options
        .filter((el) => el.toLowerCase().includes(query.toLowerCase()))
        .map((value, index) => (
          <li key={index} onClick={handleOptionSelect}>
            {" "}
            {value}{" "}
          </li>
        ));
    }
    // set the state of the array to the updated version
    setItems(filterItems());
  };

  function handleFocus() {
    const dropdownList = document.getElementById("dropdown-list");
    dropdownList.style.display = "block";
  }

 
  
  return (
    <div className="dropdown">
      <input
        id="dropdown-input"
        type="text"
        placeholder="Search..."
        // onChange to update the search query
        onChange={handleInputChange}
        onFocus={handleFocus}
      />
      <ul id="dropdown-list" style = {{display:'none'}}>
        {items}
      </ul>
    </div>
  );
}

Dropdown.defaultProps = {
  options: ["apple, bananna, grape, orange, peach"],
};

export default Dropdown;
