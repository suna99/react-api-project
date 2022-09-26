import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import MovieCont from "../includes/MovieCont";
import { useState } from "react";
import { useEffect } from "react";

function Movie() {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=08fc73c02644614242d5512f038d605a",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setMovie(result.results);
        // console.log(result.results);
      })
      .catch((error) => console.log("error", error));
  });

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Movie", "Api"]} />
        <MovieCont movies={movies} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}
export default Movie;
