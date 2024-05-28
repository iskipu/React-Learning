import { useEffect, useState } from "react";
import About from "./About";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/user/:user" element={<Home />} />
        <Route path="/nested">
          <Route index element={<Nested />} />
          <Route path="A" element={<NestedA />} />
          <Route path="B" element={<NestedB />} />
        </Route>
        <Route path="*" element={<h1>NOT FOUNDD 404</h1>} />
      </Routes>
    </>
  );
}

export default App;

function Nested() {
  return <>Nested</>;
}
function NestedA() {
  return <>Nested A</>;
}
function NestedB() {
  return <>Nested B</>;
}
