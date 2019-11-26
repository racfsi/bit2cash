import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
/*COMPONENTES*/
import Home from "./components/home/home-component";
import Contact from "./components/contact/contact-component";
/*ESTILOS*/
import "./App.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="sans-serif">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contacto">
            <Contact />
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
