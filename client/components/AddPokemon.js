import React from "react";
import { connect } from "react-redux";
import { postPokemon } from "../store/pokemon";

class AddPokemon extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      level: "",
      price: ""
    };
    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getBasePokemon() {
    const pokemon = [];

    this.props.pokemon.forEach(poke => {
      poke.name.forEach(name => {
        if (!pokemon.includes(name)) {
          pokemon.push(name);
        }
      });
    });

    return pokemon.sort();
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });

    // if (evt.target.name === "name") {
    //   const selectedTypes = [...evt.target.options]
    //     .filter(option => option.selected)
    //     .map(option => option.value);

    //   this.setState({
    //     [evt.target.name]: selectedTypes
    //   });
    // } else {
    //   this.setState({
    //     [evt.target.name]: evt.target.value
    //   });
    // }
  }

  handleSubmit(evt) {
    console.log("props inside handle submit", this.props);
    evt.preventDefault();
    console.log(this.props.pokemon);
    const basePokemon = this.props.pokemon.find(
      poke => `${poke.id}` === this.state.id
    );
    this.props.postPokemon({
      name: basePokemon.name,
      type: basePokemon.type,
      description: basePokemon.description,
      imageUrl: basePokemon.imageUrl,
      level: this.state.level,
      price: this.state.price
    });
    this.setState({
      id: "",
      level: "",
      price: ""
    });
  }

  render() {
    console.log("this.state level", this.state.level);
    console.log("this.state id", this.state.id);

    return (
      <div>
        <h1>ADD A POKEMON</h1>
        <form onSubmit={this.handleSubmit}>
          <p>Select From Base Pokemons</p>
          <select name="id" value={this.state.id} onChange={this.handleChange}>
            {this.props.pokemon.map(
              poke =>
                poke.basePokemon ? (
                  <option key={poke.id} value={poke.id}>
                    {poke.name}
                  </option>
                ) : null
            )}
            {/* {this.props.pokemon.map(poke => (
              <option key={poke.id} value={JSON.stringify(poke.type)}>
                {poke.type.join(", ")}
              </option>
            ))} */}
          </select>
          {/* <p>Description</p>
          <input
            onChange={this.handleChange}
            value={this.state.description}
            name="description"
          />
          <p>Image</p>
          <input
            onChange={this.handleChange}
            value={this.state.imageUrl}
            name="imageUrl"
          /> */}
          <p>Level</p>
          <input
            onChange={this.handleChange}
            value={this.state.level}
            name="level"
          />
          <p>Price</p>
          <input
            onChange={this.handleChange}
            value={this.state.price}
            name="price"
          />
          <button type="submit">Add Pokemon</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemon: state.pokemon
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postPokemon: pokemon => dispatch(postPokemon(pokemon))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPokemon);
