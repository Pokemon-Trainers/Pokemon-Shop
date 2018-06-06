import React from "react";

const Searchbar = props => (
  <div className="row search-container">
    <form className="search">
      <input type="text" onChange={props.handleSearchChange} placeholder="Search..." />
    </form>
  </div>
);

export default Searchbar;
