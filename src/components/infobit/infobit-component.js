import React from "react";
import { Link } from "react-router-dom";
/*ESTILOS*/
import "./infobit-component.css";

class BitInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bitName: "",
      bitPrice: "",
      bitImage: ""
    };
  }
  render() {
    return (
      <div class="divRightHeaderHome">
        <div class="chartsImgToptHeaderHome"></div>
        <div class="infoDivHeaderHome">
          <ul>
            <li>COP</li>
            <li class="active">USD</li>
            <li>EUR</li>
          </ul>
          <div class="infoDivDetHeaderHome">
            <h3>BTC</h3>
            <p class="infoDivDetPrHeaderHome">9,437.05 USD</p>
            <div class="chartsHeaderHome">
              <div class="chartsImgHeaderHome">
                <img
                  src={require("../../assets/images/home/chart-graphics.png")}
                ></img>
              </div>
              <p>-1.01%</p>
            </div>
            <div class="chartsImgFootHeaderHome">
              <img
                src={require("../../assets/images/home/chart-bottom.png")}
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BitInfo;
