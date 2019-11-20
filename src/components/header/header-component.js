import React from "react";
import "./header-component.css";
import logo from "../../assets/images/logo.png";
import pure from "../../assets/css/pure-min.css";
class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <div class="pure-g">
          <div class="pure-u-4-24">
            <div className="App-logo" >
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div class="pure-u-1-4">            
            <p>¿Cómo usarlo?</p>
          </div>
          <div class="pure-u-1-4">
            <p>Comercios</p>
          </div>
          <div class="pure-u-1-4">
            <p>¿Qué es bitcoin?</p>
          </div>
          <div class="pure-u-1-4">
            <p>Contáctanos</p>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
