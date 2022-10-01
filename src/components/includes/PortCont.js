import React from "react";

function PortItem(props) {
  return (
    <article className="port__item">
      <figure className="img">
        <a href={props.link}>
          <img src={props.image} alt={props.title} />
        </a>
      </figure>
      <div className="text">
        <h3>{props.title}</h3>
        <p>{props.category}</p>
      </div>
    </article>
  );
}

function PortCont({ ports }) {
  console.log(ports);
  return (
    <section className="port__cont">
      <div className="container">
        <div className="port__inner">
          {ports.map((port) => (
            <PortItem
              key={port.id}
              link={port.link}
              title={port.title}
              image={port.image}
              category={port.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortCont;
