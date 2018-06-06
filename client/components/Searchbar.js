import React from "react";

const Searchbar = props => (
  <div>
    <form>
      <input type="text" onChange={props.handleSearchChange} />
    </form>
  </div>
);

export default Searchbar;
