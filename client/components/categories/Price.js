import React from "react";
const priceArray = [
  "Reset Filter",
  "1 - 10",
  "11 - 20",
  "21 - 30",
  "31 - 40",
  "41 - 50",
  "51 - 60",
  "61 - 70",
  "71 - 80",
  "81 - 90",
  "91 - 100"
];

const Price = props => {
  const { handlePriceFilter } = props;
  return (
    <div>
      {priceArray.map(singlePrice => (
        <div key={singlePrice}>
          <button
            onClick={() => handlePriceFilter(singlePrice)}
            className="btn btn-outline-primary"
          >
            {" "}
            {singlePrice}{" "}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Price;
