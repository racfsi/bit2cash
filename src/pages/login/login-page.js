import React from "react";
import { Link } from "react-router-dom";
/*COMPONENTES*/
import Header from "../../components/header/header-component";
import Footer from "../../components/footer/footer-component";
/*ESTILOS*/
import "./login-page.css";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.procesar = this.procesar.bind(this);
    this.cambioEmail = this.cambioEmail.bind(this);
    this.cambioPassword = this.cambioPassword.bind(this);
  }
  render() {
    return (
      <div>
        <Header />
        <section class="sectionLogin sectionBeforeFooter woowContentFull">
          <h2>Ingreso</h2>
          <div class="txtSectionLogin">
            <p>
              Ingresa con tus datos para ver todas las<br></br>
              operaciones que has realizado.
            </p>
          </div>
          <div class="formContact">
            <div class="tabLogin">
              <ul>
                <li class="active">
                  <a href="">INGRESO</a>
                </li>
                <li class="noactive">
                  <Link to="/register" className="link">
                    REGISTRO
                  </Link>
                </li>
              </ul>
            </div>
            <div class="borderTopForm"></div>
            <form onSubmit={this.procesar}>
              <div class="pure-g">
                <div class="pure-u-1 pure-u-md-1-1">
                  <label for="name">E-mail</label>
                  <input
                    id="name"
                    class="pure-u-24-24"
                    type="text"
                    value={this.state.email}
                    onChange={this.cambioEmail}
                  />
                </div>
              </div>
              <div class="pure-g">
                <div class="pure-u-1 pure-u-md-1-1">
                  <label for="name">Contraseña</label>
                  <input
                    id="name"
                    class="pure-u-24-24"
                    type="text"
                    value={this.state.password}
                    onChange={this.cambioPassword}
                  />
                </div>
              </div>
              <div class="pure-g moreLogin">
                <div class="pure-u-1 pure-u-md-1-2">
                  <p>Recordar mis datos</p>
                </div>
                <div class="pure-u-1 pure-u-md-1-2">
                  <a href="#">¿Olvidaste tu contraseña?</a>
                </div>
              </div>
              <div class="pure-g btnSend">
                <button type="submit" class="">
                  INGRESAR
                </button>
              </div>
              <div class="pure-g moreLogin">
                <div class="pure-u-1 pure-u-md-1-1">
                  <p class="textcenter">
                    ¿No tienes una cuenta?&nbsp;
                    <a href="#">Regístrate aquí</a>
                  </p>
                </div>
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
export default Login;
