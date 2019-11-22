import React from "react";
import "./map-component.css";
import { Map, GoogleApiWrapper } from "google-maps-react";

export class Maps extends  React.Component {
  render() {
    const mapStyles = {
      width: "100%",
      height: "100%"
    };
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      />
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCw1Cu5QmZqsFLWq-D7m12E3Qqjjj13xWY"
})(Maps);
