import React from "react";

const Navbar = ({ handleSearchChange, handleClick, isLoggedIn, total }) => {
  return (
    <div className="header">
      <div>
      <img
              className="img-fluid"
              src="https://fontmeme.com/permalink/180606/ab7190a3c1ba8d6d6d1093d8c52c9e38.png"
            />
        
      </div>
      <div className="row">
        <div className="col">Home</div>

        <div className="col">Shop</div>
      </div>
    </div>
  );
};

export default Navbar;
