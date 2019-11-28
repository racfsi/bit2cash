import React from "react";
import { Link } from "react-router-dom";
/*SLIDER*/
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/*STYLES*/
import "./header-component.css";
import "../../assets/css/pure-min.css";
import "../../assets/css/grids-responsive-min.css";
import "../../assets/css/fonts.css";
import "../../assets/css/style-responsive.css";
class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <div class="pure-g">
          <div class="pure-u-1-3 pure-u-md-4-24">
            <div className="App-logo">
              <Link to="/" className="link">
                <img src={require("../../assets/images/logo.png")}></img>
              </Link>
            </div>
          </div>
          <div class="pure-u-2-3 pure-u-md-20-24">
            <ul class="am_header_nav ">
              <span class="closeMenuMobil">X</span>
              <li>
                <a>¿Cómo usarlo?</a>
              </li>
              <li>
                <a>Comercios</a>
              </li>
              <li>
                <a>¿Qué es bitcoin?</a>
              </li>
              <li>
                <Link to="/contacto" className="link">
                  CONTÁCTANOS
                </Link>
              </li>
              <div class="loginMenu">
                <div class="menuLogin">
                  <ul>
                    <li>
                      <Link to="/login" className="link">
                        INGRESO
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" className="link">
                        REGISTRO
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
            <ul class="menuMobil">
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <p></p>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
