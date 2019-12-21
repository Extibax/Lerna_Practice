/* Modules */
import React, { Component } from "react";
import { render } from "react-dom";

/* Images */
import profile_image from "@extibax_frontend/assets/images/profileImage.jpg";

class Index extends Component {
  render() {
    return (
      <div className="index_container">
        <center>
          <h1>Extibax Frontend</h1>
          <img src={profile_image} alt="Extibax Image" />
        </center>
      </div>
    );
  }
}

render(<Index />, document.getElementById("app"));
