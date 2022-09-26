import React from "react";

function YoutubeItem({ title, desc }) {
  return (
    <div className="youtube__item">
      <div className="text">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

function YoutubeCont({ videos }) {
  console.log(videos);
  return (
    <div className="youtube__cont">
      <div className="container">
        <div className="youtube__inner">
          {videos.map((video) => (
            <YoutubeItem
              key={video.id}
              title={video.snippet.title}
              desc={video.snippet.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YoutubeCont;
