import "./App.css";
import Dropdown from "./components/dropdown";
import getAllRoutes from "./utils/getAllRoutes";
import { useEffect, useState } from "react";
import Button from "./components/button";

function App() {
  const [allRoutes, setAllRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState(''); 
// State to store the selected route from the first dropdown, the set state is a function that is used to update the state
  const [selectedRouteWithId, setSelectedRouteWithId] = useState('');
// State to store the selected route from the second dropdown
  useEffect(() => {
    const fetch = async () => {
      // Fetch the routes data
      const fetchedRoutes = await getAllRoutes();
      // Update the state with the fetched routes data
      setAllRoutes(fetchedRoutes);
    };
// Call the fetch function
    fetch();
  }, []);

  return (
    <div className="App">
      <h1>Your Component should be showing on this page!</h1>
      <Dropdown 
        routes={allRoutes} 
        // Pass the fetched routes as a prop
        selectedRoute={selectedRoute} 
        // Pass the selected route state as a prop
        setSelectedRoute={setSelectedRoute} 
        // Pass the state setter function as a prop
        showId={false} 
        // Prop to control whether to show the route ID
      />
      {selectedRoute && <p>You selected: {selectedRoute}</p>}
      {/* short handed if statement is shown with the && */}
      {selectedRoute && (
      <Dropdown 
        routes={allRoutes} 
        // Pass the fetched routes as a prop
        selectedRoute={selectedRouteWithId} 
        // Pass the selected route with ID state as a prop
        setSelectedRoute={setSelectedRouteWithId} 
        // Pass the state setter function as a prop
        showId={true} 
        // Prop to control whether to show the route ID
        disabled={!selectedRoute} 
        // Disable this dropdown if no selection is made in the first dropdown
      />
      )}
      {selectedRouteWithId && <p>You selected: {selectedRouteWithId}</p>}
      <Button selectedRoute={selectedRoute} />
    </div>
  );
}

export default App;
