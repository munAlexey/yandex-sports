import React from "react";
import MainCard from "../MainCard";
import MainHomeCard from "../MainHomeCard";

export default function Cybersport(props) {
  const {info} = props;
  return (
    <div>
       <section className="main__news">
        <MainHomeCard info={info[Math.floor(Math.random() * 100)]} />
        <div className="main__block">
          {<MainCard info={info[Math.floor(Math.random() * 100)]} />}
          {<MainCard info={info[Math.floor(Math.random() * 100)]} />}
          {<MainCard info={info[Math.floor(Math.random() * 100)]} />}
          {<MainCard info={info[Math.floor(Math.random() * 100)]} />}
        </div>
      </section>
      <section className="suggested">
        <h2 className="suggested__title">Рекомендуем</h2>
        <div className="main__news">
          <MainHomeCard info={info[Math.floor(Math.random() * 100)]} />
          <div className="main__block">
            {<MainCard info={info[Math.floor(Math.random() * 100)]} />}
            {<MainCard info={info[Math.floor(Math.random() * 100)]} />}
            {<MainCard info={info[Math.floor(Math.random() * 100)]} />}
            {<MainCard info={info[Math.floor(Math.random() * 100)]} />}
          </div>
        </div>
      </section>
      <section className="news">
        <h2 className="news__title">Новости</h2>
        <div className="news__block">
          {info.map((news) => {
            return <MainHomeCard info={news} />;
          })}
        </div>
      </section>
    </div>
  )
}