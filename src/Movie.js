import React from "react";
import PropType from "prop-types";
import "./Movie.css";

function Movie({ id, title, year, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title}></img>
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
}

Movie.PropType = {
  id: PropType.number.isRequired,
  title: PropType.string.isRequired,
  year: PropType.number.isRequired,
  summary: PropType.string.isRequired,
  poster: PropType.string.isRequired,
  genres: PropType.arrayOf(PropType.string).isRequired,
};

export default Movie;
