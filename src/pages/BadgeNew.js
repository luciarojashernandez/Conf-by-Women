import React from "react";
import Navbar from "../components/Navbar.js";
import Badge from "../components/Badge.js";
import BadgeForm from "../components/BadgeForm.js";
import header from "../images/logoConf2.png";
import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
  // modificar badgeNew y no badgeForm
state= {form:{
  firstName: '',
  lastName: '',
  email: '',
  jobTitle:'',
  twitter: '',
}};
handleChange = e =>{
  const nextForm = this.state.form;
  nextForm[e.target.name] = e.target.value;

    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      },
    });
};

  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid imgHeader" src={header} alt="logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTittle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatarURL=""
              />
            </div>
            <div className="col-6">
              {/* para poder modificar el estado se pasa como prop al componente */}
              <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
