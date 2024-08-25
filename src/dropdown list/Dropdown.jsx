import "./Dropdown.css";

import { useState } from "react";

// Example of key parts (not full implementation)
function Dropdown(props) {
  // saves the original array
  const options = props.options;

  // useState to manage search query and filtered options
  const [items, setItems] = useState(
    options.map((value, index) => <li key={index}> {value}</li>)
  );

  const handleInputChange = (event) => {
    // Update search query state based on user input
    const query = event.target.value; // good

    // Filter array items based on search criteria (query)
    function filterItems() {
      return options
        .filter((el) => el.toLowerCase().includes(query.toLowerCase()))
        .map((value, index) => <li key={index}> {value} </li>);
    }
    // set the state of the array to the updated version
    setItems(filterItems());
  };

  const handleOptionSelect = (option) => {
    // Update input field with selected option and close dropdown
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        // onChange to update the search query
        onChange={handleInputChange}
      />
      <ul id="dropdown-list">
        {/* Map over filtered options and display as list items */}
        {items}
        {/* onClick on each item to select the option */}
      </ul>
    </div>
  );
}

Dropdown.defaultProps = {
  options: ["apple, bananna, grape, orange, peach"],
};

export default Dropdown;
