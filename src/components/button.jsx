import React, { useState } from "react";

export default function Button({ selectedRoute }) {
    // State to keep track of the selection counts for each route
  const [counts, setCounts] = useState({});
// function for button click
  const handleClick = () => {
    // updates the count
    if (selectedRoute) {
      setCounts((prevCounts) => {
        // makes a copy of previous count state
        const newCounts = { ...prevCounts };
        // increment count state
        if (newCounts[selectedRoute]) {
          newCounts[selectedRoute] += 1;
        } else {
            // initializes count state
          newCounts[selectedRoute] = 1;
        }
        return newCounts;
      });
    //   Show an alert with the updated count for the selected route
      alert(`You selected: ${selectedRoute}. This option has been selected ${counts[selectedRoute] ? counts[selectedRoute] + 1 : 1} times.`);
    } else {
        // Show an alert if no option is selected
      alert("Please select an option first.");
    }
  };
// makes the button work
  return (
    <button onClick={handleClick}>
      Select Current Option
    </button>
  );
}
