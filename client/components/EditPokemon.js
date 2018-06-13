import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { changePokemon, removePokemon } from "../store/pokemon";

class EditPokemon extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      description: "",
      level: "",
      price: ""
    };
    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (!props.selectedPokemon) {
      return state;
    }
    state.id = props.selectedPokemon.id;
    state.description = props.selectedPokemon.description;
    state.level = props.selectedPokemon.level;
    state.price = props.selectedPokemon.price;
    return state;
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const id = this.state.id;
    this.props.handleToggle();

    this.props.postPokemon({
      ...this.state
    });
  }

  handleDelete(event) {
    event.preventDefault();
    if (window.confirm("Are you sure you wish to delete this Pokemon?"))
      this.props.history.push("/pokemon");

    this.props.removePokemon(this.props.selectedPokemon.id);
  }

  render() {
    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="">
              <p>Level :</p>
            </div>
            <div className="">
              <input
                onChange={this.handleChange}
                value={this.state.level}
                name="level"
              />
            </div>
          </div>
          <div className="row">
            <div className="">
              <p>Price :</p>
            </div>
            <div className="">
              <input
                onChange={this.handleChange}
                value={this.state.price}
                name="price"
              />
            </div>
          </div>
          {/* <div className="row"> */}
          <div className="row">
            <div>
              <p>Description</p>
            </div>
            <div>
              <textarea
                onChange={this.handleChange}
                value={this.state.description}
                name="description"
              />
            </div>

            <div>
              <button
                className="edit-btn btn btn-warning"
                onClick={this.handleSubmit}
                type="submit"
              >
                Update Pokemon
              </button>
            </div>
            <div>
              <button
                className="btn btn-danger"
                type="button"
                onClick={this.handleDelete}
              >
                Delete Pokemon
              </button>
            </div>
          </div>
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
    postPokemon: pokemon => dispatch(changePokemon(pokemon)),
    removePokemon: pokemonId => dispatch(removePokemon(pokemonId))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditPokemon)
);
