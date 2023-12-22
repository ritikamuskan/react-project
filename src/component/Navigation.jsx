import React from "react";

const Navigation = () => {
  return (
    <>
      <div>
        <nav className="navbar">
          <div className="logo">
            <img href="#" alt="logo" />
          </div>{" "}
          <div className="navlink">
            <a href="#"> About </a>
            <a href="#"> Home </a>
            <a href="#"> Contact </a>
            <a href="#"> category </a>{" "}
          </div>{" "}
          <button className="navbtn">login</button>
        </nav>{" "}
      </div>
    </>
  );
};

export default Navigation;
