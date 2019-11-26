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
class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <div class="pure-g">
          <div class="pure-u-4-24">
            <div className="App-logo">
              <Link to="/" className="link">
                <img src={require("../../assets/images/logo.png")}></img>
              </Link>
            </div>
          </div>
          <div class="pure-u-20-24">
            <ul class="am_header_nav">
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
            </ul>
            <p></p>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
