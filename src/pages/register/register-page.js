import React from "react";
import { Link } from "react-router-dom";
import ScrollMagic from "scrollmagic";
/*COMPONENTES*/
import Header from "../../components/header/header-component";
import Footer from "../../components/footer/footer-component";
/*ESTILOS*/
import "./register-page.css";
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();
    this.state = {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      password2: "",
      empresa: "",
      nit: "",
      numcuenta: "",
      banco: "",
      tipocuenta: "",
      terminos: ""
    };
    this.procesar = this.procesar.bind(this);
    this.cambioEmail = this.cambioEmail.bind(this);
    this.cambioPassword = this.cambioPassword.bind(this);
  }
  componentDidMount() {
    new ScrollMagic.Scene({
      triggerElement: ".sectionRegister",
      triggerHook: 0.9,
      duration: "120%",
      offset: -30
    })
      .setClassToggle(".sectionRegister", "sectionRegisterAnimate")
      .addTo(this.controller);
  }
  render() {
    return (
      <div>
        <Header />
        <section class="sectionRegister sectionBeforeFooter woowContentFull">
          <h2>Registro</h2>
          <div class="txtSectionLogin">
            <p>
              Para tener un registro de todos tus movimientos crea<br></br>una
              cuenta con tus datos personales.
            </p>
          </div>
          <div class="formContact">
            <div class="tabLogin">
              <ul>
                <li class="noactive">
                  <Link to="/login" className="link">
                    INGRESO
                  </Link>
                </li>
                <li class="active">
                  <a href="#">REGISTRO</a>
                </li>
              </ul>
            </div>
            <div class="borderTopForm"></div>
            <form onSubmit={this.procesar}>
              <div class="pure-g">
                <div class="pure-u-1 pure-u-md-1-1"></div>
              </div>
              <div class="pure-g">
                <div class="pure-u-1 pure-u-md-1-2 paddingRight">
                  <label for="name">Nombre</label>
                  <input
                    id="name"
                    class="pure-u-24-24"
                    type="text"
                    value={this.state.nombre}
                    onChange={this.cambioEmail}
                  />
                </div>
                <div class="pure-u-1 pure-u-md-1-2 paddingLeft">
                  <label for="name">Apellido</label>
                  <input
                    id="name"
                    class="pure-u-24-24"
                    type="text"
                    value={this.state.password}
                    onChange={this.cambioPassword}
                  />
                </div>
              </div>
              <div class="pure-g">
                <div class="pure-u-1 pure-u-md-1-1">
                  <label for="name">E-mail</label>
                  <input
                    id="name"
                    class="pure-u-24-24"
                    type="text"
                    value={this.state.email}
                    onChange={this.cambioPassword}
                  />
                </div>
              </div>
              <div class="pure-g">
                <div class="pure-u-1 pure-u-md-1-2 paddingRight">
                  <label for="name">Contraseña</label>
                  <input
                    id="name"
                    class="pure-u-24-24"
                    type="text"
                    value={this.state.password}
                    onChange={this.cambioPassword}
                  />
                </div>
                <div class="pure-u-1 pure-u-md-1-2 paddingLeft">
                  <label for="name">Confirmar Contraseña</label>
                  <input
                    id="name"
                    class="pure-u-24-24"
                    type="text"
                    value={this.state.password2}
                    onChange={this.cambioPassword}
                  />
                </div>
              </div>
              <div class="pure-g">
                <div class="pure-u-1 pure-u-md-1-2 paddingRight">
                  <label for="name">Empresa</label>
                  <input
                    id="name"
                    class="pure-u-24-24"
                    type="text"
                    value={this.state.empresa}
                    onChange={this.cambioPassword}
                  />
                </div>
                <div class="pure-u-1 pure-u-md-1-2 paddingLeft">
                  <label for="name">NIT / CC</label>
                  <input
                    id="name"
                    class="pure-u-24-24"
                    type="text"
                    value={this.state.nit}
                    onChange={this.cambioPassword}
                  />
                </div>
              </div>
              <div class="pure-g">
                <div class="pure-u-1 pure-u-md-1-1">
                  <label for="name">Número de cuenta</label>
                  <input
                    id="name"
                    class="pure-u-24-24"
                    type="text"
                    value={this.state.nit}
                    onChange={this.numcuenta}
                  />
                </div>
              </div>
              <div class="pure-g moreLogin ">
                <div class="pure-u-1 pure-u-md-1-2">
                  <p>Acepto términos y condiciones</p>
                </div>
                <div class="pure-u-1 pure-u-md-1-2">
                  <p>
                    ¿Ya te registraste?&nbsp;
                    <Link to="/login" className="link"></Link>
                    <a href="#">Ingresa aquí</a>
                  </p>
                </div>
              </div>
              <div class="pure-g btnSend">
                <button type="submit" class="">
                  REGISTRARME
                </button>
              </div>
            </form>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
  procesar(e) {
    e.preventDefault();
    console.log(this.state);
  }

  cambioEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  cambioPassword(e) {
    this.setState({
      password: e.target.value
    });
  }
}
export default Register;
