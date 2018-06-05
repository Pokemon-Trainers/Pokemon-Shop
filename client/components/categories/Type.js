import React from "react";

const typeArray = [
  "Reset Filter",
  "Bug",
  "Dragon",
  "Ice",
  "Fighting",
  "Fire",
  "Flying",
  "Grass",
  "Ghost",
  "Ground",
  "Electric",
  "Normal",
  "Poison",
  "Psychic",
  "Rock",
  "Water"
];

const Type = props => {
  console.log(props);
  const { handleTypeFilter } = props;
  return (
    <div>
      {typeArray.map(singleType => (
        <li key={singleType}>
          <button
            onClick={() => handleTypeFilter(singleType)}
            className="btn btn-outline-primary"
          >
            {" "}
            {singleType}{" "}
          </button>
        </li>
      ))}
    </div>
  );
};

export default Type;
