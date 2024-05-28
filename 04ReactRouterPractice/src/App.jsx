import { useEffect, useState } from "react";
import About from "./About";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/user/:user" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
