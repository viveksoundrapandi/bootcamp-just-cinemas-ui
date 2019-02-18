import React from "react";
import PropTypes from "prop-types";

const MovieItem = ({ name, slug, experiences }) => {
  const imageUrl = `https://img.spicinemas.in/resources/images/movies/${slug}/150x207.jpg`;
  return (
    <div className="movie-item">
      <img alt={name} className="movie-thumbnail" src={imageUrl} />
      <h5 className="name">{name}</h5>
      <p className="experiences">{experiences}</p>
    </div>
  );
};

MovieItem.defaultProps = {};

MovieItem.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
};

export default MovieItem;
