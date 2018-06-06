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
            <h3>Categories</h3>
            <ul className="nav-sidebar">
              {/* <li className="active">
                <a href="#">Overview</a>
              </li> */}
              <h4>Type</h4>
              <Type handleTypeFilter={handleTypeFilter} pokemon={pokemon} />

              <h4>Price</h4>

              <Price handlePriceFilter={handlePriceFilter} pokemon={pokemon} />

              <h4>Level</h4>

              <Level pokemon={pokemon} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
