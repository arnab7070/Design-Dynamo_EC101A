import {BrowserRouter as  Router,Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";

import SignUp from "./Components/SignUp";
import Login from "./Components/login.jsx"
function App() {
  return (
  <Router>
      <div className="App">
        {/* Place Home component inside a Route if it's meant to be a route */}
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
        
      </div>

      {/* Wrap all Route components with the Routes component */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;
