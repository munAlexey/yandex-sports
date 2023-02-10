import React from "react";
import MainCard from "../MainCard";
import MainHomeCard from "../MainHomeCard";
import { NavLink } from "react-router-dom";
import calendar from "../../img/calendar.svg";
import football from "../../img/football.svg";
import hockey from "../../img/ice-hockey.svg";
import basketball from "../../img/basketball.svg";
import biathlon from "../../img/target.svg";

export default function Football(props) {
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
      <section className="tablo">
        <div className="tablo__header_football">
          <ul className="tablo__nav">
            <li>
              <NavLink to="football" className="tablo__link">
              <img className="tablo__icon" src={football} alt="football" />
              <span>Футбол</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="hockey" className="tablo__link">
              <img className="tablo__icon" src={hockey} alt="хоккей" />
                Хоккей
              </NavLink>
            </li>
            <li>
              <NavLink to="basketball" className="tablo__link">
              <img className="tablo__icon" src={basketball} alt="баскетбол" />
                Баскетбол
              </NavLink>
            </li>
            <li>
              <NavLink to="biathlon" className="tablo__link">
              <img className="tablo__icon" src={biathlon} alt="биатлон" />
                Биатлон
              </NavLink>
            </li>
          </ul>
          <ul className="tablo__date">
            <li>
              <a className="tablo__link" href="/">Вчера</a>
            </li>
            <li>
              <a className="tablo__link" href="/">Сегодня</a>
            </li>
            <li>
              <a className="tablo__link" href="/">Завтра</a>
            </li>
            <li>
              <button type="button" className="tablo__btn">
                <img className="tablo__img" src={calendar} alt="календарь"/>
              </button>
            </li>
          </ul>
        </div>
        <div></div>
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