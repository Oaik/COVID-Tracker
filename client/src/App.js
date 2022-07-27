import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/login" exact element={<Login/>}/>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
