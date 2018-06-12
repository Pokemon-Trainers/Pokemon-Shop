import React from "react";
import Review from "../Review/Review";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Reviews = props => {
  const { filteredReviews, pokemon } = props;

  

  return (
    <div>
      <h4>Reviews</h4>

      {filteredReviews.length === 0 && <div>You have no reviews...</div>}

      {filteredReviews.map((review, key) => {
        const pokemonId = review.pokemonId;
        const reviewedPokemon = pokemon.find(
          individualPokemon => individualPokemon.id === pokemonId
        );

        return (
          <div className="flex margin-bottom" key={review.id}>
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
  );
};

const mapState = state => {
  return {
    filteredReviews: state.reviews.filter(
      review => review.userId === state.user.id
    ),
    pokemon: state.pokemon
  };
};

export default connect(mapState)(Reviews);
