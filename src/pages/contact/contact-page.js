import React from "react";
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
    //console.log({ [input]: e.target.value });
  };
  // cuando enviamos el formulario
  submitForm = e => {
    window.Email.send({
      SecureToken: "a0f5e8e9-ffa6-4b5d-9603-c922452f64d4",
      To: 'ruizmunozc@gmail.com',
      From: "you@isp.com",
      Subject: "This is the subject",
      Body: "And this is the body" + this.state.nombre
    }).then(message => alert(message));
    // this.setState({
    //   nombre: "",
    //   apellido: "",
    //   email: "",
    //   mensaje: ""
    // });
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
          <section class="sectionContact sectionBeforeFooter woowContentFull">
            <div class="pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 pure-u-1-1">
              <h2>Gracias por tu tiempo</h2>
            </div>
            <div class="formContact" onSubmit={this.submitForm}>
              <form>
                <div class="pure-g">
                  <div class="pure-u-1 pure-u-md-1-1">
                    <p>Hemos recibido tu mensaje.</p>
                    <p>
                      Nos pondremos en contacto contigo<br></br>lo mas pronto
                      posible
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
  }
}
export default Contact;
