import React from "react";

function UnsplashItem(props) {
  return (
    <div className="unspl__item">
      <img src={props.image} alt={props.title} />
    </div>
  );
}

function UnsplashCont({ unspls }) {
  return (
    <section className="unspl__cont">
      <div className="container">
        <div className="unspl__inner">
          <div className="unspl__img__wrap">
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
      </div>
    </section>
  );
}

export default UnsplashCont;
