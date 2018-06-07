import React from 'react';

const Searchbar = props => (
  <div className="row search-container">
    <div className="search">
      {' '}
      {/* Take away form*/}
      <input
        type="text"
        onChange={props.handleSearchChange}
        placeholder="Search..."
      />
    </div>
  </div>
);

export default Searchbar;
