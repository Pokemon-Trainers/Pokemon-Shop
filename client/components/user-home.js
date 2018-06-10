import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Review from "./Review/Review";

/**
 * COMPONENT
 */
export const UserHome = props => {
  const { email, isAdmin, user, filteredReviews, pokemon } = props;

  console.log(filteredReviews);
  return (
    <div>
      <h3>Welcome, {user.email}</h3>
      {isAdmin ? "You are an admin" : ""}
      <div>
        <h4>Reviews</h4>
        {filteredReviews.map((review, key) => {
          const pokemonId = review.pokemonId;
          const reviewedPokemon = pokemon.find(
            individualPokemon => individualPokemon.id === pokemonId
          );

          return (
            <div
              className="flex"
              key={review.id}
              style={{ paddingBottom: "30px" }}
            >
              <div>
                <Link to={`/pokemon/${reviewedPokemon.id}`}>
                  <img
                    src={reviewedPokemon.imageUrl}
                    style={{ width: "200px", margin: "30px" }}
                  />
                </Link>
              </div>
              <div>
                <h2>
                  <Link to={`/pokemon/${reviewedPokemon.id}`}>
                    {reviewedPokemon.name}
                  </Link>
                </h2>
                <Review key={key} review={review} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    isAdmin: state.user.admin,
    user: state.user,
    filteredReviews: state.reviews.filter(
      review => review.userId === state.user.id
    ),
    pokemon: state.pokemon
  };
};

export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
};
