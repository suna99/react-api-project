import React from "react";

function UnsplashItem(props) {
  return (
    <div className="unspl__item">
      <img src={props.image} alt={props.title} />
      <div className="text">
        <h3>{props.title}</h3>
      </div>
    </div>
  );
}

function UnsplashCont({ unspls }) {
  return (
    <section className="unspl__cont">
      <div className="container">
        <div className="unspl__inner">
          {unspls.map((unspl) => (
            <UnsplashItem
              key={unspl.id}
              title={unspl.description}
              image={unspl.urls.regular}
              desc={unspl.alt_description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default UnsplashCont;
