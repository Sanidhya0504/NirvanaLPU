import "./App.css";
import Home from "./Components/home";
import About from "./Components/about";
import Contact from "./Components/contact";
import Events from "./Components/events";
import { HashRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/events" element={<Events />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
