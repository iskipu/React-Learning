import { useEffect, useState } from "react";
import About from "./About";
import Home from "./Home";
import {
  NavLink,
  Link,
  Outlet,
  Route,
  Routes,
  useOutlet,
  useOutletContext,
  useLocation,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <nav className="flex space-x-4">
        <ul className="flex space-x-4">
          <li>
            <NavLink to="nested" className="text-blue-500 hover:text-blue-800">
              Nested
            </NavLink>
          </li>
          <li>
            <NavLink
              to="nested/a"
              replace
              className={({ isActive }) =>
                ` ${
                  isActive ? "text-red-500" : "text-blue-400"
                } hover:text-blue-800`
              }
            >
              NestedA
            </NavLink>
          </li>
          <li>
            <Link
              to="nested/b"
              className="text-blue-500 hover:text-blue-800"
              state={{ from: "Link State", to: "NESTEDD BB" }}
            >
              NestedB
            </Link>
          </li>
        </ul>
        <Link to={"/homeNavigator"}>HOME NAVIG</Link>
      </nav>

      <Routes>
        <Route path="/user/:user" element={<Home />} />
        <Route path="/nested" element={<Layout />}>
          <Route index element={<Nested />} />
          <Route path="A" element={<NestedA />} />
          <Route path="B" element={<NestedB />} />
        </Route>
        <Route path="/homeNavigator" element={<HomeNavigator />} />
        <Route path="*" element={<h1>NOT FOUNDD 404</h1>} />
      </Routes>
    </>
  );
}

export default App;

function Layout() {
  return (
    <>
      <h1>My Layoutt</h1>
      <Outlet context={"data from Outlet"} />
    </>
  );
}
function Nested() {
  const outletData = useOutletContext();
  return <>Nested {outletData}</>;
}
function NestedA() {
  return <>Nested A</>;
}
function HomeNavigator() {
  return <Navigate to={"/user/JohnDOe"} />;
}
function NestedB() {
  const { state: data } = useLocation();
  console.log(data);
  return (
    <>
      Nested B
      <p>
        data from {data.from} to {data.to}
      </p>
    </>
  );
}
