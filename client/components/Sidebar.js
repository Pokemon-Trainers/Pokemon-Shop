import React from 'react';
import Type from './categories/Type';
import Price from './categories/Price';
import Level from './categories/Level';

const Sidebar = props => {
  const { pokemon, handleTypeFilter, handlePriceFilter, resetFilters } = props;

  return (
    <div className="col-sm-5 col-md-3 d-none d-sm-block">
      <div className="row ">
        <div className="col-12">
          <h3>Categories</h3>
          <ul className="nav-sidebar">
            <button onClick={resetFilters} className="btn btn-outline-primary">
              Reset Filters
            </button>
            <h4>Type</h4>
            <Type handleTypeFilter={handleTypeFilter} />

            <h4>Price</h4>

            <Price handlePriceFilter={handlePriceFilter} />

            <h4>Level</h4>

            <Level />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
