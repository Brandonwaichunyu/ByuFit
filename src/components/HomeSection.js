import React from "react";

function HomeSection(props) {
  return (
    <>
      <div className="contentinnerwrapper">
        <div className="contentinner">
          <figure className="content-image">
            <img
              className="contentinner-image"
              alt="Teamwork"
              src={props.src}
            />
          </figure>
          <div className="content-text">
            <h2 className="contentinner-text">{props.title}</h2>
            <p className="paragraph-text">{props.paragraph}</p>
            <p className="paragraph-text">{props.paragraph2}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSection;
