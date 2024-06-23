import { useEffect, useState } from "react"

import allRoutes from "./routes"
import Dropdown from "./components/Dropdown"
import "./App.css"

function App() {
  const [routes, setRoutes] = useState(null)
  const [searchParam, setSearchParam] = useState(null)

  useEffect(() => {
    const getEmploymentRoutes = async () => {
      setRoutes(allRoutes)
    }

    getEmploymentRoutes()
  }, [setRoutes])

  const changeHandler = selectedOption => {
    setSearchParam(selectedOption)
  }

  return (
    <div className="App">
      <h1>I'm Running!!!</h1>

      {routes && (
        <Dropdown
          options={routes}
          keyName={"name"}
          onChange={changeHandler}
        />
      )}

      <select disabled={searchParam === null}>
        <option>fh</option>
      </select>
    </div>
  )
}

export default App
