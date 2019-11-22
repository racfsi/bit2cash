import React from "react";
import "./home-component.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <section className="bannerHome woowContentFull ">
          <h1>Bienvenido a Bit2Cash,</h1>
        </section>
        <section className="sectionComoUsarlo" id="sectionComoUsarlo">
          <h2>¿Cómo usarlo?</h2>
        </section>
        <section className="sectionComercios" id="sectionComercios">
          <h2>Comercios</h2>
        </section>
        <section className="sectionQueEs" id="sectionQueEs">
          <h2>¿Qué es Bitcoin?</h2>
        </section>
        <section className="sectionAliados" id="sectionAliados">
          <h2>Nuestros aliados</h2>
        </section>
      </div>
    );
  }
}
export default Home;
