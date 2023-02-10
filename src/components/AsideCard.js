import React from "react";

export default function AsideCard(props) {
  const { adInfo } = props;

  return (
    <li>
      <a className="ad__card" href={adInfo?.url} >
        <h2 className="ad__card-title">{adInfo?.title}</h2>
        <p className="ad__card-subtitle">{adInfo?.description}</p>
        <img className="ad__img" src={adInfo?.urlToImage} alt={adInfo?.title} />
        <span className="ad__text">{adInfo?.url.slice(8)}</span>
      </a>
    </li>
  );
}
