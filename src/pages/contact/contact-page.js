import React from "react";
import { Link } from "react-router-dom";
/*COMPONENTES*/
import Header from "../../components/header/header-component";
import Footer from "../../components/footer/footer-component";
/*ESTILOS*/
import "./contact-page.css";
class Contact extends React.Component {
  // constantes
  state = {
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
    emailStatus: ""
  };
  // controlamos el valor de las constantes
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  // cuando enviamos el formulario
  submitForm = e => {
    window.Email.send({
      // SecureToken: "3f73680c-18df-496e-bdad-40fe91e28813",
      Host: "smtp.elasticemail.com",
      Username: "crcisf@gmail.com",
      Password: "f64df06b-776e-4b8a-af05-a066de78c1dc",
      To: "ruizmunozc@gmail.com",
      From: "crcisf@gmail.com",
      Subject: "Contacto Bit2Cash ",
      Body: "Nombre: "+this.state.nombre+"<br/> Apellido: "+this.state.apellido+" <br/>Correo: "+this.state.email+" <br/>Mensaje: "+this.state.mensaje,
    }).then(message =>
      this.setState({
        emailStatus: true
      })
    );

    e.preventDefault();
  };
  resetForm = e => {
    this.setState({
      emailStatus: ""
    });
    e.preventDefault();
  };
  render() {
    const { nombre, apellido, email, mensaje, emailStatus } = this.state;
    if (!emailStatus) {
      return (
        <div>
          <Header />
          <section class="sectionContact sectionBeforeFooter woowContentFull">
            <div class="pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 pure-u-1-1">
              <h2>Contáctanos</h2>
            </div>
            <p class="txtSectionContact">
              ¿Tienes preguntas?<br></br>
              Estamos para responder cualquier pregunta que puedas tener.
            </p>
            <div class="formContact" onSubmit={this.submitForm}>
              <form>
                <div class="pure-g">
                  <div class="pure-u-1 pure-u-md-1-2 paddingRight">
                    <label for="name">Nombre</label>
                    <input
                      id="name"
                      name="name"
                      class="pure-u-24-24"
                      type="text"
                      value={nombre}
                      onChange={this.handleChange("nombre")}
                    />
                  </div>
                  <div class="pure-u-1 pure-u-md-1-2 paddingLeft">
                    <label for="apellido">Apellido</label>
                    <input
                      id="apellido"
                      class="pure-u-24-24"
                      type="text"
                      value={apellido}
                      onChange={this.handleChange("apellido")}
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
                      value={email}
                      onChange={this.handleChange("email")}
                    />
                  </div>
                </div>
                <div class="pure-g">
                  <div class="pure-u-1 pure-u-md-1-1">
                    <label for="name">Mensaje</label>
                    <textarea
                      id="name"
                      class="pure-u-24-24"
                      type="text"
                      value={mensaje}
                      onChange={this.handleChange("mensaje")}
                    ></textarea>
                  </div>
                </div>
                <div class="pure-g btnSend">
                  <button type="submit" class="">
                    ENVIAR
                  </button>
                </div>
              </form>
            </div>
          </section>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <section class="sectionContact sectionContactSend sectionBeforeFooter woowContentFull">
            <div class="pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 pure-u-1-1">
              <h2>Gracias por tu tiempo</h2>
            </div>
            <div class="formContact" onSubmit={this.submitForm}>
              <form>
                <div class="pure-g">
                  <div class="pure-u-1 pure-u-md-1-1">
                    <p class="primaryTxt">Hemos recibido tu mensaje,</p>
                    <p class="secondTxt">
                      Nos pondremos en contacto contigo<br></br>lo mas pronto
                      posible
                    </p>
                    <div class="btnNewMsg">
                      <Link
                        to="/contacto"
                        className="link"
                        onClick={this.resetForm}
                      >
                        ESCRIBIR NUEVO MENSAJE
                      </Link>
                    </div>
                    <div class="btnNewMsg btnGoToHome">
                      <Link to="/" className="link">
                        IR AL INICIO
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
          <Footer />
        </div>
      );
    }
  }
}
export default Contact;
