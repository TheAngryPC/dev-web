// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/post1" element={<div>Blog Post 1 Content</div>} />
        <Route path="/blog/post2" element={<div>Blog Post 2 Content</div>} />
        <Route path="/blog/post3" element={<div>Blog Post 3 Content</div>} />
      </Routes>
    </Router>
  );
};

export default App;
