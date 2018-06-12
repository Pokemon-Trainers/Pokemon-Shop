import React from 'react';
import Type from './categories/Type';
import Price from './categories/Price';
import Level from './categories/Level';

const Sidebar = props => {
  const {
    pokemon,
    handleTypeFilter,
    handlePriceFilter,
    resetFilters,
    toggleTypeHidden,
    typeHidden,
    priceHidden,
    togglePriceHidden,
  } = props;

  return (
    <div className="col-sm-5 col-md-3 d-none d-sm-block">
      <div className="text-center mt-4">
        <h3>Categories</h3>
      </div>
      <div className="mx-auto">
        <button type="button" onClick={resetFilters} className="btn btn-info">
          All
        </button>
      </div>
      <div className="mx-auto">
        <button
          type="button"
          className="btn btn-info text-center"
          onClick={toggleTypeHidden}
        >
          Type (17)
        </button>
        {!typeHidden && <Type handleTypeFilter={handleTypeFilter} />}
      </div>
      <div className="mx-auto">
        <button
          type="button"
          className="btn btn-info text-center"
          onClick={togglePriceHidden}
        >
          Price (10)
        </button>

        {!priceHidden && <Price handlePriceFilter={handlePriceFilter} />}
      </div>

      <Level />
    </div>
  );
};

export default Sidebar;
