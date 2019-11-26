import React from "react";
import Slider from "react-slick";
class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
    return (
      <Slider {...settings}>
        <div>
          <div>
            <img
              src={require("../../assets/images/aliados/aliado-1.png")}
            ></img>
          </div>
          <div>
            <img
              src={require("../../assets/images/aliados/aliado-2.png")}
            ></img>
          </div>
        </div>
        <div>
          <div>
            <img
              src={require("../../assets/images/aliados/aliado-3.png")}
            ></img>
          </div>
          <div>
            <img
              src={require("../../assets/images/aliados/aliado-4.png")}
            ></img>
          </div>
        </div>
        <div>
          <div>
            <img
              src={require("../../assets/images/aliados/aliado-5.png")}
            ></img>
          </div>
          <div>
            <img
              src={require("../../assets/images/aliados/aliado-6.png")}
            ></img>
          </div>
        </div>
        <div>
          <div>
            <img
              src={require("../../assets/images/aliados/aliado-7.png")}
            ></img>
          </div>
          <div>
            <img
              src={require("../../assets/images/aliados/aliado-8.png")}
            ></img>
          </div>
        </div>
        <div>
          <div>
            <img
              src={require("../../assets/images/aliados/aliado-1.png")}
            ></img>
          </div>
          <div>
            <img
              src={require("../../assets/images/aliados/aliado-2.png")}
            ></img>
          </div>
        </div>
      </Slider>
    );
  }
}
export default SimpleSlider;
