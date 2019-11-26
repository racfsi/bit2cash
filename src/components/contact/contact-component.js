import React from "react";
/*COMPONENTES*/
import Header from "../header/header-component";
import Footer from "../footer/footer-component";
/*ESTILOS*/
import "./contact-component.css";
class Contact extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <section class=" woowContentFull" id="sectionQueEs">
          <div class="pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 pure-u-1-1">
            <h2>Contáctanos</h2>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
export default Contact;
