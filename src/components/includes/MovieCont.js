import React from "react";

function MovieItem({ title, image, overview }) {
  return (
    <div className="movie__item">
      <img src={"https://image.tmdb.org/t/p/w500/" + image} alt={title} />
      <div className="text">
        <h3>{title}</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
}

function MovieCont({ movies }) {
  console.log(movies);
  return (
    <section className="movie__cont">
      <div className="container">
        <div className="movie__inner">
          {movies.map((movie) => (
            <MovieItem
              key={movie.id}
              title={movie.title}
              image={movie.poster_path}
              overview={movie.overview}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MovieCont;
