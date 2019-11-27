import React from "react";
import { Link } from "react-router-dom";
/*COMPONENTES*/
import Header from "../../components/header/header-component";
import Footer from "../../components/footer/footer-component";
import BitInfo from "../../components/infobit/infobit-component";
import Maps from "../../components/map/map-component";
import SimpleSlider from "../../components/aliados/aliados-component";
/*ESTILOS*/
import "./home-page.css";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <section class="bannerHome woowContentFull ">
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
          <div class="pure-g">
            <div class="pure-u-15-24">
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
            <div class="pure-u-1-3">
              <BitInfo />
            </div>
          </div>
        </section>
        <section class="sectionComoUsarlo woowContentFull" id="sectionComoUso">
          <div class="pure-g">
            <div class="pure-u-1-1">
              <h2>¿Cómo usarlo?</h2>
            </div>
          </div>
          <div class="stepsUse">
            <div class="stepsUseLeft">
              <img
                src={require("../../assets/images/home/steps-use-1.png")}
              ></img>
              <div class="stepsUseTxt">
                <p>Descarga e instala Telegram</p>
                <p>en tu smartphone (es gratis).</p>
              </div>
              <div class="stepsUseMore">
                <ul>
                  <li>
                    <img
                      src={require("../../assets/images/home/google-play.jpg")}
                    ></img>
                  </li>
                  <li>
                    <img
                      src={require("../../assets/images/home/app-store.jpg")}
                    ></img>
                  </li>
                </ul>
              </div>
            </div>
            <div class="stepsUseRight">
              <img
                src={require("../../assets/images/home/steps-use-2.png")}
              ></img>
              <div class="stepsUseTxt">
                <p>
                  <span>Regístrate aquí</span> llenando el formulario
                </p>
                <p>básico de información.</p>
              </div>
            </div>
          </div>
          <div class="stepsUse">
            <div class="stepsUseLeft stepsUseLeft3">
              <img
                src={require("../../assets/images/home/steps-use-3.png")}
              ></img>
              <div class="stepsUseTxt">
                <p>
                  Abre un diálogo con <span>@bit2cashbot</span>
                </p>
                <p>y digita el monto en pesos (COP)</p>
                <p>de tu transacción.</p>
              </div>
            </div>
            <div class="stepsUseRight stepsUseRight4">
              <img
                src={require("../../assets/images/home/steps-use-4.png")}
              ></img>
              <div class="stepsUseTxt">
                <p>Se generará un código QR que podrás compartir</p>
                <p>con tus clientes y permitirles pagar </p>
                <p>con sus bitcoins (BTC).</p>
              </div>
            </div>
          </div>
          <div class="stepsUse">
            <div class="stepsUseOne">
              <img
                src={require("../../assets/images/home/steps-use-5.png")}
              ></img>
              <div class="stepsUseTxt">
                <p>
                  Recibirás el monto en <strong>pesos</strong> (COP){" "}
                </p>
                <p>en la cuenta bancaria de tu preferencia.</p>
              </div>
            </div>
          </div>
        </section>
        <section class="sectionComercios woowContentFull" id="sectionComercios">
          <div class="pure-g">
            <div class="pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 pure-u-1-1">
              <h2>Comercios</h2>
              <p class="txtSectionComercios">
                Estos son todos los lugares que aceptan <span>bitcoins</span> en
                Colombia. Acércate<br></br> a ellos y paga con tus{" "}
                <span>bitcoins</span>. tu comercio también acepta{" "}
                <span>bitcoins</span>, <br></br>Si contáctanos y con gusto
                pondremos tu información en nuestra lista.
              </p>
            </div>
          </div>
          <div class="pure-g">
            <div class="pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 pure-u-1-1">
              <Maps />
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
            </div>
            <BitInfo />
          </div>
        </section>
        <section
          class="sectionAliados sectionBeforeFooter woowContentFull"
          id="sectionAliados"
        >
          <div class="pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 pure-u-1-1">
            <h2>Nuestros aliados</h2>
          </div>
          <div class="pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 pure-u-1-1">
            <SimpleSlider />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
export default Home;
