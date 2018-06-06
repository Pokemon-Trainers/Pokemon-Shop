import React from 'react';

class Searchbar extends React.Component {
  constructor () {
    super()
  }

  render() {
    return (
      <div>
        <form>
        <input type="text" />
        <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default Searchbar;
