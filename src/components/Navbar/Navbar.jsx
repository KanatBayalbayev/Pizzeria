import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="link">
            Все
          </NavLink>
        </li>
        <li>
          <NavLink to="/pizza" className="link">
            Пицца
          </NavLink>
        </li>
        <li>
          <NavLink to="/combo" className="link">
            Комбо
          </NavLink>
        </li>
        <li>
          <NavLink to="/snacks" className="link">
            Закуски
          </NavLink>
        </li>
        <li>
          <NavLink to="/desserts" className="link">
            Десерты
          </NavLink>
        </li>
        <li>
          <NavLink to="/drinks" className="link">
            Напитки
          </NavLink>
        </li>
        <li>
          <NavLink to="/other" className="link">
            Другие товары
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="link">
            О нас
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="link">
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
