import React from "react";

const typeArray = [
  // 'Reset Filter',
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
  const { handleTypeFilter } = props;
  return (
    <div>
      {typeArray.map(singleType => (
        <div key={singleType}>
          <button
            id="types"
            onClick={() => handleTypeFilter(singleType)}
            // className="btn btn-outline-primary"
            type="button"
            className="btn btn-link"
          >
            {" "}
            {singleType}{" "}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Type;
