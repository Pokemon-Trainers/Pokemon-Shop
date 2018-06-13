import React from "react";
import Type from "./categories/Type";
import Price from "./categories/Price";
import Level from "./categories/Level";

const Sidebar = props => {
  const {
    pokemon,
    handleTypeFilter,
    handlePriceFilter,
    resetFilters,
    toggleTypeHidden,
    typeHidden,
    priceHidden,
    togglePriceHidden
  } = props;

  return (
    <div className="col-sm-5 col-md-3 d-none d-sm-block">
      <div className="row ">
        <div className="col-12">
          <h3 className="font">Categories</h3>
          <div className="nav-sidebar mx-auto">
            <button
              type="button"
              onClick={resetFilters}
              className="btn btn-info mx-auto mt-3"
            >
              Reset Filters
            </button>
            <h4 className="mt-3">
              <a onClick={toggleTypeHidden}>Type (15)</a>
              {!typeHidden && <Type handleTypeFilter={handleTypeFilter} />}
            </h4>

            <h4 className="mt-3">
              <a onClick={togglePriceHidden}>Price (10)</a>
            </h4>

            {!priceHidden && <Price handlePriceFilter={handlePriceFilter} />}

        {!priceHidden && <Price handlePriceFilter={handlePriceFilter} />}
      </div>

      <Level />
    </div>
    </div>
    </div>
  );
};

export default Sidebar;
