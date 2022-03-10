// It renders each movie. The movie object is simpy passed into it as a props

import "./Movie.css";

export const Movie = ({ props }) => {
  return (
    <>
      <div className="MovieCard">
        <img src={props.Poster} alt="Movie Poster" />
        <h3 className="MovieText">{props.Title}</h3>
      </div>
    </>
  );
};
