import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
/*COMPONENTES*/
import Home from "./components/home/home-component";
import Contact from "./components/contact/contact-component";
import Login from "./components/login/login-component";
import Register from "./components/register/register-component";
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
      </BrowserRouter>
    </div>
  );
}

export default App;
