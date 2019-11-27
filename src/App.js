import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
/*COMPONENTES*/
// import Home from "./components/home/home-component";
import Home from "./pages/home/home-page";
import Contact from "./pages/contact/contact-page";
import Login from "./pages/login/login-page";
import Register from "./pages/register/register-page";
import Tyc from "./pages/tyc/tyc-page";
/*ESTILOS*/
import "./App.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contacto">
          <Contact />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/terminos-y-condiciones">
          <Tyc />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
