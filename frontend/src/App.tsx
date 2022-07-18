import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AboutItem from "./components/AboutItem";
import CreateItem from "./components/CreateItem";
import Header from "./components/Header";

function App() {
  let routes = useRoutes([
    { path: "/", element: <Dashboard /> },
    { path: "/createItem", element: <CreateItem /> },
    { path: "/aboutItem/:id", element: <AboutItem /> },
  ]);
  return routes;
}

const AppWrapper = () => {
  return (
    <Router>
      <Header />
      <App />
    </Router>
  );
};

export default AppWrapper;
