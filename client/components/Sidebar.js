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
          <h3>Categories</h3>
          <div className="nav-sidebar mx-auto">
            <button
              onClick={resetFilters}
              className="btn btn-outline-primary mx-auto"
            >
              Reset Filters
            </button>
            <button
              type="button"
              className="btn btn-link"
              id="Type"
              onClick={toggleTypeHidden}
            >
              Type (17)
            </button>
            {!typeHidden && <Type handleTypeFilter={handleTypeFilter} />}

            <button
              type="button"
              className="btn btn-link"
              id="Type"
              onClick={togglePriceHidden}
            >
              Price (10)
            </button>

            {!priceHidden && <Price handlePriceFilter={handlePriceFilter} />}

            <Level />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
