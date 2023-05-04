import React from "react";
import mainLogo from "../../assets/pics/pizza-graphic-clipart-design-free-png.webp";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar/Navbar";


const Header = () => {
  return (
    <>
      <header>
        <section className="mainLogo-container">
          <img src={mainLogo} alt="mainLogo" className="mainLogo" />
          <div>
            <h1 className="name-pizzeria">Pizzeria</h1>
            <p>The Best Cheesy Pizza</p>
          </div>
        </section>
        <section className="delivery-info-container">
          <h3 className="delivery-info">
            Доставка пиццы <span className="orangered">Алматы</span>{" "}
          </h3>
          <div className="delivery-time-info tooltip">
            <div className="min">
              <p>30 мин</p>
            </div>
            <div className="score">
              <p>5</p>
              <span>
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffe11f" }}
                  className="star"
                />
              </span>
            </div>

            <div className="tooltip-text">
              <div className="first-section">
                <h3>30 минут</h3>
                <h4>Среднее время доставки</h4>
                <p>
                  Если не успеем за 60 минут, вы получите сертификат на большую
                  пиццу
                </p>
              </div>
              <div className="second-section">
                <h3>5</h3>
                <div>
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#ffe11f" }}
                    className="star"
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#ffe11f" }}
                    className="star"
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#ffe11f" }}
                    className="star"
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#ffe11f" }}
                    className="star"
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#ffe11f" }}
                    className="star"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-info-container">
          <h3 className="phone-number">+7 707 777-07-07</h3>
          <h3 className="text">Звонок по телефону</h3>
        </section>
        <section className="additions-container">
          <div className="language-container">
            <FontAwesomeIcon icon={faGlobe} className="icon" />
            <span className="language-icon">RU</span>
            <p>Язык</p>
          </div>
          <div className="profile-container">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <p>Вход</p>
          </div>
        </section>
      </header>
      <Navbar />
    </>
  );
};

export default Header;
