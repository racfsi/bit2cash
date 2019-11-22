import React from "react";
import "./home-component.css";
import Maps from "../map/map-component";

class Home extends React.Component {
  render() {
    return (
      <div>
        <section class="bannerHome woowContentFull ">
          <div class="pure-g">
            <div class="pure-u-3-4">
              <div class="divLeftHeaderHome">
                <div class="titleHeaderHome">
                  <h1>
                    Bienvenido a Bit2Cash, la plataforma digital que te permite
                    usar Bitcoins como forma de pago.
                  </h1>
                </div>
                <div class="txtHeaderHome">
                  <p>
                    Nosotros te ayudamos a recibirlos y después te los hacemos
                    llegar a la cuenta de tu preferencia de manera segura.
                  </p>
                </div>
              </div>
            </div>
            <div class="pure-u-1-4">
              <div class="divRightHeaderHome">
                <div class="infoDivHeaderHome">
                  <ul>
                    <li>COP</li>
                    <li>USD</li>
                    <li>EUR</li>
                  </ul>
                  <h3>BTC</h3>
                  <p>9,437.05 USD</p>
                  <div class="chartsHeaderHome">
                    <p>-1.01%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="sectionComoUsarlo woowContentFull" id="sectionComoUso">
          <div class="pure-g">
            <h2>¿Cómo usarlo?</h2>
          </div>
        </section>
        <section class="sectionComercios woowContentFull" id="sectionComercios">
          <div class="pure-g">
            <div class="pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 pure-u-1-1">
              <h2>Comercios</h2>
            </div>
          </div>
          <div class="pure-g">
            <div class="pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 pure-u-1-1">
              <div class="infoMapsHome">
                <div class="infoMapSelectHome">
                  <h3>Canoa Taberna Japonesa</h3>
                  <div class="ratingInfoMapSelectHome">
                    <p>4.6 (747)</p>
                  </div>
                </div>
                <div class="mapComerciosHome">
                  <Maps />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="sectionQueEs woowContentFull" id="sectionQueEs">
          <div class="pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 pure-u-1-1">
            <h2>¿Qué es Bitcoin?</h2>
          </div>
          <div class="pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 pure-u-1-1">
            <div class="infoQueEs">
              <p>
                Es la moneda digital del futuro que se usa en el presente en
                casi todo el mundo. Cada vez más los principales comercios están
                aceptando Bitcoins. En Colombia está comenzando a usarse y
                Bit2Cash te ayudará a hacerlo.
              </p>
              <div class="infoDivHeaderHome">
                <ul>
                  <li>COP</li>
                  <li>USD</li>
                  <li>EUR</li>
                </ul>
                <h3>BTC</h3>
                <p>9,437.05 USD</p>
                <div class="chartsHeaderHome">
                  <p>-1.01%</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="sectionAliados woowContentFull" id="sectionAliados">
          <h2>Nuestros aliados</h2>
        </section>
      </div>
    );
  }
}
export default Home;
