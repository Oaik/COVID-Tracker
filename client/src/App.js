import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Log from "./pages/log/Log";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";


import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/dashboard" exact element={<Dashboard/>}/>
          <Route path="/log" exact element={<Log/>}/>
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/register" exact element={<Register/>}/>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
