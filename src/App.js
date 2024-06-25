import "./App.css";
import Dropdown from "./components/dropdown";
import getAllRoutes from "./utils/getAllRoutes";
import { useEffect, useState } from "react";

function App() {
  const [allRoutes, setAllRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const fetchedRoutes = await getAllRoutes();
      setAllRoutes(fetchedRoutes);
    };

    fetch();
  }, []);

  return (
    <div className="App">
      <h1>Your Component should be showing on this page!!!</h1>
      <Dropdown routes={allRoutes} selectedRoute={selectedRoute} setSelectedRoute={setSelectedRoute} />
      {selectedRoute && <p>You selected: {selectedRoute}</p>}
    </div>
  );
}

export default App;

