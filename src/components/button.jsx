import React, { useState } from "react";

export default function Button({ selectedRoute }) {
  const [counts, setCounts] = useState({});

  const handleClick = () => {
    if (selectedRoute) {
      setCounts((prevCounts) => {
        const newCounts = { ...prevCounts };
        if (newCounts[selectedRoute]) {
          newCounts[selectedRoute] += 1;
        } else {
          newCounts[selectedRoute] = 1;
        }
        return newCounts;
      });
      alert(`You selected: ${selectedRoute}. This option has been selected ${counts[selectedRoute] ? counts[selectedRoute] + 1 : 1} times.`);
    } else {
      alert("Please select an option first.");
    }
  };

  return (
    <button onClick={handleClick}>
      Select Current Option
    </button>
  );
}
