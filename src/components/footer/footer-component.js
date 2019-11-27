import React from "react";
import { Link } from "react-router-dom";
/*STYLES*/
import "./footer-component.css";
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div class="icoFooter">
          <img src={require("../../assets/images/footer/footer-ico.png")}></img>
        </div>
        <div class="pure-g">
          <div class="pure-u-1 pure-u-md-1-4">
            <div class="infoDivFooter">
              <h3>NOSOTROS</h3>
              <ul>
                <li>
                  <p>¿QUÉ ES BIT2CASH?</p>
                </li>
                <li>
                  <p>¿CÓMO USARLO?</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="pure-u-1 pure-u-md-1-4">
            <div class="infoDivFooter">
              <h3>CONTACTO</h3>
            </div>
          </div>
          <div class="pure-u-1 pure-u-md-1-4">
            <div class="infoDivFooter">
              <h3>LEGAL</h3>
              <ul>
                <li>
                  <Link to="/terminos-y-condiciones" className="link">
                    TÉRMINOS Y CONDICIONES
                  </Link>
                  <p></p>
                </li>
                <li>
                  <p>POLÍTICA DE PRIVACIDAD</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="pure-u-1 pure-u-md-1-4">
            <div class="infoDivFooter">
              <h3>RECURSOS</h3>
              <ul>
                <li>
                  <p>PRECIO DEL BITCOIN</p>
                </li>
                <li>
                  <p>COMERCIOS BITCOIN</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="pure-u-4-24">
            <div className="App-logo">
              <img
                src={require("../../assets/images/footer/footer-logo.png")}
              ></img>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
