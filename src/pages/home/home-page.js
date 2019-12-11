import React from "react";
import { Link } from "react-router-dom";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
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
    const valida = 1;
    return (
      <div>
        <Header />
        <section class="bannerHome woowContentFull" id="bit2chash">
          <div class="wrapperIcos">
            <div class="icoLeft">
              <img
                src={require("../../assets/images/home/banner-background-l.png")}
              ></img>
            </div>
            <div class="icoRightTop">
              <img
                src={require("../../assets/images/home/banner-background-rt.png")}
              ></img>
            </div>
            <div class="icoRightMiddle">
              <img
                src={require("../../assets/images/home/banner-background-rm.png")}
              ></img>
            </div>
            <div class="icoRightBottom">
              <img
                src={require("../../assets/images/home/banner-background-rb.png")}
              ></img>
            </div>
          </div>

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
            <div class="pure-u-1-1 pure-u-md-1-1 pure-u-lg-15-24 pure-u-lg-15-24 ">
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
            <div class="pure-u-1-1 pure-u-md-1-1 pure-u-lg-1-3 pure-u-lg-1-3 divBannerTop">
              <BitInfo />
            </div>
          </div>
        </section>
        <section class="sectionComoUsarlo woowContentFull" id="como-usarlo">
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
                <ul class="storeApps">
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
              <BrowserView>
                <img
                  src={require("../../assets/images/home/steps-use-2.png")}
                ></img>
              </BrowserView>
              <MobileView>
                <img
                  src={require("../../assets/images/home/steps-use-2_m.png")}
                ></img>
              </MobileView>
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
              <BrowserView>
                <img
                  src={require("../../assets/images/home/steps-use-3.png")}
                ></img>
              </BrowserView>
              <MobileView>
                <img
                  src={require("../../assets/images/home/steps-use-3_m.png")}
                ></img>
              </MobileView>
              <div class="stepsUseTxt">
                <p>
                  Abre un diálogo con <span>@bit2cashbot</span>
                </p>
                <p>y digita el monto en pesos (COP)</p>
                <p>de tu transacción.</p>
              </div>
            </div>
            <div class="stepsUseRight stepsUseRight4">
              <BrowserView>
                <img
                  src={require("../../assets/images/home/steps-use-4.png")}
                ></img>
              </BrowserView>
              <MobileView>
                <img
                  src={require("../../assets/images/home/steps-use-4_m.png")}
                ></img>
              </MobileView>
              <div class="stepsUseTxt">
                <p>Se generará un código QR que podrás compartir</p>
                <p>con tus clientes y permitirles pagar </p>
                <p>con sus bitcoins (BTC).</p>
              </div>
            </div>
          </div>
          <div class="stepsUse stepsUseNoPad">
            <div class="stepsUseOne">
              <BrowserView>
                <img
                  src={require("../../assets/images/home/steps-use-5.png")}
                ></img>
              </BrowserView>
              <MobileView>
                <img
                  src={require("../../assets/images/home/steps-use-5_m.png")}
                ></img>
              </MobileView>
              <div class="stepsUseTxt">
                <p>
                  Recibirás el monto en <strong>pesos</strong> (COP){" "}
                </p>
                <p>en la cuenta bancaria de tu preferencia.</p>
              </div>
            </div>
          </div>
        </section>
        <section class="sectionComercios woowContentFull" id="comercios">
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
        <section class="sectionQueEs woowContentFull" id="que-es-bitcoin">
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
          id="nuestros-aliados"
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
