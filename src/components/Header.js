import React from "react";
import logoYandex from "../img/yandex.svg";
import logoSport from "../img/yandex-sport.svg";
import yaplus from "../img/plus.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__block">
        <div className="header__sport">
          <div className="header__logos">
            <img className="header__logo" src={logoYandex} alt="yandex" />
            <img
              className="header__logo-sport"
              src={logoSport}
              alt="yandex-sport"
            />
          </div>
          <div className="header__yaplus">
            <a
              className="header__yaplus-link"
              href="https://plus.yandex.ru/?from=header_sport&utm_campaign=plus&utm_medium=header_sport&utm_source=yandex&source=header_sport&origin=sport_desktop_plus"
            >
              <img src={yaplus} alt="yaplus" />
            </a>
            <button type="button" className="header__button">
              <svg
                width="16"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.75 5.219c0 2.663-1.608 4.948-3.75 4.948-2.144 0-3.75-2.285-3.75-4.948C4.25 2.556 5.631 1 8 1c2.366 0 3.75 1.556 3.75 4.219zm-10.332 10.9c.32.381 1.702 1.548 6.581 1.548 4.88 0 6.26-1.167 6.582-1.548a.346.346 0 0 0 .076-.264c-.075-.735-.737-4.022-6.658-4.022-5.92 0-6.583 3.287-6.657 4.022-.01.097.013.19.076.264z"
                  fill="#000"
                ></path>
              </svg>
              <span className="header__button-span">Войти</span>
            </button>
          </div>
        </div>
        <nav className="nav">
          <ul className="nav__list">
            <li>
              <NavLink className="nav__link" to="/">
                Главное
              </NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/match">
                Матч-центр
              </NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/football">
                Футбол
              </NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/hockey">
                Хоккей
              </NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/skating">
                Фигурное катание
              </NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/biathlon">
                Биатлон
              </NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/fighting">
                Единоборства
              </NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/basketball">
                Баскетбол
              </NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/tennis">
                Теннис
              </NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/autosport">
                Автоспорт
              </NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/volleyball">
                Волейбол
              </NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/cybersport">
                Киберспорт
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
