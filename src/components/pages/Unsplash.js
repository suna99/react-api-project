import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import UnsplashCont from "../includes/UnsplashCont";
import { useState } from "react";
import { useEffect } from "react";

function Unsplash() {
  const [unspls, setUnsplash] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.unsplash.com/search/photos?query=london&client_id=tAVffcr0OH82NIrhxNxzcvTr9SQC8WqhRAP8aI5R2XY",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setUnsplash(result.results);
        console.log(result.results);
      })
      .catch((error) => console.log("error", error));
  });

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Unslpash", "Api"]} />
        <UnsplashCont unspls={unspls} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Unsplash;
