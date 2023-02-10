import React from "react";

export default function MainCard(props) {
  const { info } = props;

  return (
    <a className="main__card" href={info?.url}>
      <div className="main__info-block">
        <div className="main__text-block">
          <h2 className="main__card-title">{info?.title}</h2>
          <p className="main__card-subtitle">{info?.description}</p>
        </div>
        <img className="main__img" src={info?.urlToImage} alt={info?.title} />
      </div>
      <div className="main__date">
        <span className="main__text">{info?.url.slice(8)}</span>
        <span className="main__time">{info?.publishedAt.slice(11, 16)}</span>
      </div>
    </a>
  );
}
