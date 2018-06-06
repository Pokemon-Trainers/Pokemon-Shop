import React from "react";

const Searchbar = props => (
  <div>
    <input type="text" onChange={props.handleSearchChange} />
  </div>
);

export default Searchbar;
