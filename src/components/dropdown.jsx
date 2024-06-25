import React from "react";

export default function Dropdown({ routes, selectedRoute, setSelectedRoute }) {
  function handleChange(event) {
    setSelectedRoute(event.target.value);
  }

  // Ensure routes are defined before accessing them
  if (!routes || routes.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <select id="dropdown" value={selectedRoute} onChange={handleChange}>
        <option value="">--Please choose an option--</option>
        {routes.map((route, index) => (
          <option key={index} value={route.name}>
            {route.name}
          </option>
        ))}
      </select>
    </div>
  );
}
