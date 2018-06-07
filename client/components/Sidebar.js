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
    <div className="col-1 ">
      <div className="row ">
        <div className="col-sm-3 col-md-2">
          <div className=" d-flex justify-content-end flex-wrap">
            <h3>Categories</h3>
            <ul className="nav-sidebar">
              {/* <li className="active">
                <a href="#">Overview</a>
              </li> */}

              <button
                onClick={resetFilters}
                className="btn btn-outline-primary"
              >
                Reset Filters
              </button>
              <h4>
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={toggleTypeHidden}
                >
                  Type (15)
                </button>
              </h4>
              {!typeHidden && <Type handleTypeFilter={handleTypeFilter} />}

              <h4>
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={togglePriceHidden}
                >
                  Price (10)
                </button>
              </h4>

              {!priceHidden && <Price handlePriceFilter={handlePriceFilter} />}

              <h4>Level</h4>

              <Level />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
