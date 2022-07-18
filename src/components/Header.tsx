import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const goToCreateItem = () => {
    navigate("/createItem");
  };
  const goToHomePage = () => {
    navigate("/");
  };
  return (
    <div className="navbar">
      <span
        style={{ cursor: "pointer" }}
        onClick={() => {
          goToHomePage();
        }}
      >
        Home
      </span>
      <span
        style={{ marginLeft: "30px", cursor: "pointer" }}
        onClick={() => goToCreateItem()}
      >
        Create
      </span>
    </div>
  );
};

export default Header;
