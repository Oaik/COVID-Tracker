import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// components
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

// pages
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Log from "./pages/log/Log";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

// contexts
import { AuthProvider } from "./contexts/authContext";

import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
      </AuthProvider>

      <Footer />
    </div>
  );
}

export default App;
