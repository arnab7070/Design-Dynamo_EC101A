import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from './Pages/Home';
import { Login } from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
