import React from "react";
import "../../assets/css/pure-min.css";
import "../../assets/css/grids-responsive-min.css";
import "../../assets/css/fonts.css";
import "./header-component.css";
import logo from "../../assets/images/logo.png";
class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <div class="pure-g">
          <div class="pure-u-4-24">
            <div className="App-logo">
              <img src={logo} alt="logo" />
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
                <a>Contáctanos</a>
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
