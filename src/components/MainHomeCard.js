import React from "react";

export default function MainHomeCard(props) {
  const { info } = props;

  return (
    <a className="home__card" href={info?.url}>
      <h2 className="home__card-title">{info?.title}</h2>
      <p className="home__card-subtitle">{info?.description}</p>
      <img className="home__img" src={info?.urlToImage} alt={info?.title} />
      <div className="home__block">
        <span className="home__text">{info?.url.slice(8)}</span>
        <span className="home__time">{info?.publishedAt.slice(11, 16)}</span>
      </div>
    </a>
  );
}
