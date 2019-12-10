import React from "react";
import { Link } from "react-router-dom";
import Scrollchor from "react-scrollchor";
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
                  <Scrollchor
                    to="#bit2chash"
                    animate={{ offset: -70, duration: 500 }}
                    spy={true}
                    className="nav-link"
                    onClick={this.removeClass}
                  >
                    ¿QUÉ ES BIT2CASH?
                  </Scrollchor>
                  <p></p>
                </li>
                <li>
                  <Scrollchor
                    to="#como-usarlo"
                    animate={{ offset: -70, duration: 500 }}
                    spy={true}
                    className="nav-link"
                    onClick={this.removeClass}
                  >
                    ¿CÓMO USARLO?
                  </Scrollchor>
                  <p></p>
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
                  <Scrollchor
                    to="#que-es-bitcoin"
                    animate={{ offset: -70, duration: 500 }}
                    spy={true}
                    className="nav-link"
                    onClick={this.removeClass}
                  >
                    PRECIO DEL BITCOIN
                  </Scrollchor>
                  <p></p>
                </li>
                <li>
                  <Scrollchor
                    to="#comercios"
                    animate={{ offset: -70, duration: 500 }}
                    spy={true}
                    className="nav-link"
                    onClick={this.removeClass}
                  >
                    COMERCIOS BITCOIN
                  </Scrollchor>
                  <p></p>
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
