import React from "react";
import logo from "../../assets/images/logo.png";
import "./footer-component.css";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div class="pure-g">
          <div class="pure-u-1-4">
            <p>NOSOTROS</p>
          </div>
          <div class="pure-u-1-4">
            <p>CONTACTO</p>
          </div>
          <div class="pure-u-1-4">
            <p>LEGAL</p>
          </div>
          <div class="pure-u-1-4">
            <p>RECURSOS</p>
          </div>
          <div class="pure-u-4-24">
            <div className="App-logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </footer>
      
    );
  }
}
export default Footer;
