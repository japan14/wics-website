import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Eboard from "./pages/Eboard.jsx";
import About from "./pages/About.jsx";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MainRouter />
      <Footer/>
    </BrowserRouter>
  );
};

function MainRouter() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/eboard" element={<Eboard />} />
      <Route path="/about" element={<About />} /> 
    </Routes>
  );
}

export default App;
