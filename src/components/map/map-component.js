import React from "react";
import "./map-component.css";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export class Maps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view : "nada",
      stores: [
        {
          nombre: "Crepes And Wafles",
          rubro: "Bar",
          dir: "Cra. 9 #74-08",
          tel: "(1) 6767600",
          hor: "11:45–20:30",
          latitude: 4.657928,
          longitude: -74.05781,
          desc:
            "Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, Sed Diam Nonummy Nibh Euismod Tincidunt Ut Laoreet Dolore"
        },
        {
          nombre: "Tostao",
          rubro: "Cafeteria",
          dir: " Cl. 65 #23 20",
          tel: "(1) 4864737",
          hor: "7:00–19:00",
          latitude: 4.656719,
          longitude: -74.070768,
          desc:
            "Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, Sed Diam Nonummy Nibh Euismod Tincidunt Ut Laoreet Dolore"
        },
        {
          nombre: "Tennis",
          rubro: "Cafeteria",
          dir: "C. C. y de Negocios Andino. Carrera 11 #82-71",
          tel: "(1) 6168975",
          hor: "11:00–20:00",
          latitude: 4.66701,
          longitude: -74.052323,
          desc:
            "Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, Sed Diam Nonummy Nibh Euismod Tincidunt Ut Laoreet Dolore"
        },
        {
          nombre: "Adidas",
          rubro: "Alojamiento",
          dir: "Cl. 82 # 13-20",
          tel: "318 8481653",
          hor: "10:00–21:00",
          latitude: 4.667487,
          longitude: -74.054681,
          desc:
            "Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, Sed Diam Nonummy Nibh Euismod Tincidunt Ut Laoreet Dolore"
        },
        {
          nombre: "Juan Valdez Café",
          rubro: "Alojamiento",
          dir: "Cra. 7 # 67-05",
          tel: "Cra. 7 ## 67-05",
          hor: "6:30–20:30",
          latitude: 4.652822,
          longitude: -74.058616,
          desc:
            "Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, Sed Diam Nonummy Nibh Euismod Tincidunt Ut Laoreet Dolore"
        },
        {
          nombre: "El Corral",
          rubro: "Restaurante",
          dir: "Calle 73 No. 10 - 83",
          tel: "01-800-0114722",
          hor: "11:00–21:00",
          latitude: 4.658405,
          longitude: -74.057536,
          desc:
            "Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, Sed Diam Nonummy Nibh Euismod Tincidunt Ut Laoreet Dolore"
        }
      ]
    };
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          onClick={() =>
            this.setState({
              nombre: store.nombre,
              rubro: store.rubro,
              dir: store.dir,
              tel: store.tel,
              hor: store.hor,
              desc: store.desc
            })
          }
        />
      );
    });
  };
  render() {
    const viewInfo = this.state.view;
    const mapStyles = {
      width: "100%",
      height: "100%"
    };

    return (
      <div class="infoMapsHome">
        <div class="infoMapSelectHome ">
          <h3>{this.state.nombre}</h3>
          <div class="ratingInfoMapSelectHome">
            <p>4.6 (747)</p>
            <p>{this.state.rubro}</p>
          </div>
          <div class="imgInfoMapSelectHome">
            <img
              src={require("../../assets/images/comercios/comercio-1.jpg")}
            ></img>
          </div>
          <div class="dataInfoMapSelectHome">
            <ul>
              <li>
                <div class="icoInfoMap">
                  <p>
                    <span class="icon-icono5"></span>
                  </p>
                </div>
                <p>{this.state.dir}</p>
              </li>
              <li>
                <div class="icoInfoMap">
                  <p>
                    <span class="icon-icono6"></span>
                  </p>
                </div>
                <p>{this.state.tel}</p>
              </li>
              <li>
                <div class="icoInfoMap">
                  <p>
                    <span class="icon-icono7"></span>
                  </p>
                </div>
                <p>{this.state.hor}</p>
              </li>
              <li>
                <p>{this.state.desc}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="mapComerciosHome">
          <Map
            google={this.props.google}
            zoom={13}
            style={mapStyles}
            initialCenter={{ lat: 4.6669067, lng: -74.0721145 }}
          >
            {this.displayMarkers()}
          </Map>
        </div>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCw1Cu5QmZqsFLWq-D7m12E3Qqjjj13xWY"
})(Maps);
