import React from "react";
import Navbar from "../components/Navbar.js";
import Badge from "../components/Badge.js";
import header from "../images/logoConf2.png";
import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid imgHeader" src={header} alt="logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Lucía"
                lastName="Rojas"
                twitter="lu_rohe"
                jobTittle="Frontend Developer"
                avatarURL=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
