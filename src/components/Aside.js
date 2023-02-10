import React from "react";
import AsideCard from "./AsideCard";

export default function Aside(props) {
  const { info } = props;
  const arrAdInfo = [];
  for (let i = 0; i < 5; i++) {
    arrAdInfo.push(info[Math.floor(Math.random() * 100)]);
  }

  return (
    <aside className="ad">
      <ul className="ad__list">
        {arrAdInfo.map((item, index) => {
          return <AsideCard key={index} adInfo={item} />;
        })}
      </ul>
    </aside>
  );
}
