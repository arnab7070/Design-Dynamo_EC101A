<<<<<<< HEAD
import {BrowserRouter as  Router,Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from './Pages/Home';
import { Login } from "./Pages/Login";
import TrackingPage from "../src/Pages/Tracking";
>>>>>>> 4306c7bc8cfcaa0f209cad8dc6d465c399d1ddc1

import SignUp from "./Components/SignUp";
import Login from "./Components/login.jsx"
function App() {
  return (
<<<<<<< HEAD
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
=======
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="TrackingPage" element={<TrackingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
>>>>>>> 4306c7bc8cfcaa0f209cad8dc6d465c399d1ddc1
  );
}

export default App;
