import React from "react";
import Type from "./categories/Type";
import Price from "./categories/Price";
import Level from "./categories/Level";

const Sidebar = props => {
  const { pokemon, handleTypeFilter, handlePriceFilter } = props;

  return (
    <div className="col-1 ">
      <div className="row ">
        <div className="col-sm-3 col-md-2">
          <div className="d-flex justify-content-end flex-wrap">
            <h4>Categories</h4>
            <ul className="nav-sidebar">
              {/* <li className="active">
                <a href="#">Overview</a>
              </li> */}
              <h3>Type</h3>
              <Type handleTypeFilter={handleTypeFilter} pokemon={pokemon} />

              <h3>Price</h3>

              <Price handlePriceFilter={handlePriceFilter} pokemon={pokemon} />

              <h3>Level</h3>

              <Level pokemon={pokemon} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
