import React from "react";

export default function Dropdown({ routes, selectedRoute, setSelectedRoute, showId, disabled }) {
  // Function to handle changes in the dropdown selection
  function handleChange(event) {
    setSelectedRoute(event.target.value);
    // Update the selected route state with the new value
  }

  // Ensure routes are defined before accessing them
  if (!routes || routes.length === 0) {
    return <div>Loading...</div>;
    // Display loading message if routes data is not yet available
  }

  return (
    <div>
      <select id="dropdown" value={selectedRoute} onChange={handleChange} disabled={disabled}>
        {/* here if disabled if true then it is disabled */}
        <option value="">--Please choose an option--</option>
        {routes.map((route, index) => (
          // Maps through the routes and create an option for each route
          <option key={index} value={route.name}>
            {route.name} {showId && `(${route.routeId})`}
            {/* Show route ID if showId prop is true */}
          </option>
        ))}
      </select>
    </div>
  );
}
