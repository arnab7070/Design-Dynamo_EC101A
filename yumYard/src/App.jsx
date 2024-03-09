import {BrowserRouter as  Router,Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from './Pages/Home';
import { Login } from "./Pages/Login";
import SignUp from "./Components/SignUp";
import TrackingPage from "../src/Pages/Tracking";
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
        <Route path="TrackingPage" element={<TrackingPage />} />
      </Routes>
  
      </Router>
 
  );
}

export default App;
