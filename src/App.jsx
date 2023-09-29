// Import the CSS file for styling
import './App.css';

// Import necessary components from the 'react-router-dom' library
import { Route, Routes } from 'react-router-dom';

// Import the 'ViewCards' component from the './Views/ViewCards' file
import ViewCards from './Views/ViewCards';

// Define the main application component named 'App'
function App() {
  return (
    <>
      {/* Define the routing configuration using 'Routes' */}
      <Routes>
        {/* Define a route for the root URL ("/") that renders the 'ViewCards' component */}
        <Route path="/" element={<ViewCards />} />

        {/* Define another route for the "/view" URL that also renders the 'ViewCards' component */}
        <Route path="/view" element={<ViewCards />} />

        {/* 
          Note: There's a commented-out route for "/edit" that is currently not in use.
          You can uncomment it and provide the 'EditCards' component to enable that route.
        */}
        {/* <Route path="/edit" element={<EditCards />} /> */}
      </Routes>
    </>
  );
}

// Export the 'App' component as the default export
export default App;
