import React from "react";
import axios from "axios";
/*COMPONENTES*/
import Header from "../header/header-component";
import Footer from "../footer/footer-component";
/*ESTILOS*/
import "./contact-component.css";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      apellido: "",
      email: "",
      mensaje: ""
    };
    this.procesar = this.procesar.bind(this);
    this.cambioNombre = this.cambioNombre.bind(this);
    this.cambioApellido = this.cambioApellido.bind(this);
    this.cambioEmail = this.cambioEmail.bind(this);
    this.cambioMensaje = this.cambioMensaje.bind(this);
  }
  render() {
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
          <div class="formContact">
            <form onSubmit={this.procesar}>
              <div class="pure-g">
                <div class="pure-u-1 pure-u-md-1-2 paddingRight">
                  <label for="name">Nombre</label>
                  <input
                    id="name"
                    name="name"
                    class="pure-u-24-24"
                    type="text"
                    value={this.state.nombre}
                    onChange={this.cambioNombre}
                  />
                </div>
                <div class="pure-u-1 pure-u-md-1-2 paddingLeft">
                  <label for="apellido">Apellido</label>
                  <input
                    id="apellido"
                    class="pure-u-24-24"
                    type="text"
                    value={this.state.apellido}
                    onChange={this.cambioApellido}
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
                    onChange={this.cambioEmail}
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
                    value={this.state.mensaje}
                    onChange={this.cambioMensaje}
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
  }
  procesar(e) {
    e.preventDefault();
    axios({
      method: "post",
      url: "../envioForm.php",
      headers: { "content-type": "application/json" },
      data: this.state
    })
      .then(result => {
        console.log(result);
      })
      .catch(error => this.setState({ error: error.message }));
  }

  cambioNombre(e) {
    this.setState({
      nombre: e.target.value
    });
  }

  cambioApellido(e) {
    this.setState({
      apellido: e.target.value
    });
  }
  cambioEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  cambioMensaje(e) {
    this.setState({
      mensaje: e.target.value
    });
  }
}
export default Contact;
