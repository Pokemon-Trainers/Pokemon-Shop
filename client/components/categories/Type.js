import React from 'react';

const typeArray = [
  // 'Reset Filter',
  'Bug',
  'Dragon',
  'Electric',
  'Fairy',
  'Fighting',
  'Fire',
  'Flying',
  'Ghost',
  'Grass',
  'Ground',
  'Ice',
  'Normal',
  'Poison',
  'Psychic',
  'Rock',
  'Steel',
  'Water',
];

const Type = props => {
  const { handleTypeFilter } = props;
  return (
    <div>
      {typeArray.map(singleType => (
        <div key={singleType}>
          {/* <span
            key={singleType}
            className={`badge ${singleType.toLowerCase()}`}
            onClick={() => handleTypeFilter(singleType)}
          >
            {singleType}
          </span> */}
          <button
            id="types"
            // className="btn btn-outline-primary"
            onClick={() => handleTypeFilter(singleType)}
            type="button"
            className="btn btn-link"
          >
            {' '}
            {singleType}{' '}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Type;
