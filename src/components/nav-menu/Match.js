import React from "react";
import MainHomeCard from "../MainHomeCard";

export default function Match(props) {
  const {info} = props;
  
  return (
    <div>
      <section className="news">
        <h2 className="news__title">Новости футбола</h2>
        <div className="news__block">
          {info.map((news) => {
            return <MainHomeCard info={news} />;
          })}
        </div>
      </section>
    </div>
  )
}