import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import CreateComponent from "./components/createComponent";
import EditComponent from "./components/editComponent";
import ListComponent from "./components/listComponent";

import "./Style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <ListComponent /> },
      { path: "list", element: <ListComponent /> },
      { path: "create", element: <CreateComponent /> },
      { path: "edit", element: <EditComponent /> },
     
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

function AppLayout() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">My App</h1>
        <ul className="navbar-menu">
          <li>
            <Link to="/list" className="navbar-link">
              List
            </Link>
          </li>
          <li>
            <Link to="/create" className="navbar-link">
              Create
            </Link>
          </li>
       
        </ul>
      </div>
    </nav>
  );
}

export default App;
