import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Youtube from "./components/pages/Youtube";
import Movie from "./components/pages/Movie";
import Reference from "./components/pages/Reference";
import Unsplash from "./components/pages/Unsplash";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="/unsplash" element={<Unsplash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
