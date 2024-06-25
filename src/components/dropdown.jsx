import React from "react"

export default function Dropdown({
  routes,
  selectedRoute,
  setSelectedRoute,
  changeHandler=null,
  showId,
  isDisabled,
}) {
  // Ensure routes are defined before accessing them
  if (!routes || routes.length === 0) {
    return <div>Loading...</div>
  }

  const handleChange = event => {
    setSelectedRoute(event.target.value)
    if(changeHandler) changeHandler()
  }

  return (
    <div>
      <select
        id="dropdown"
        value={selectedRoute}
        onChange={event => handleChange(event)}
        disabled={isDisabled}
      >
        <option value="">--Please choose an option--</option>
        {routes.map((route, index) => (
          <option
            key={index}
            value={route.name}
          >
            {route.name} {showId && `(${route.routeId})`}
          </option>
        ))}
      </select>
    </div>
  )
}
