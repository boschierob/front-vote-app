import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

import TutorialDataService from "../services/tutorial.service";


class Signup extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeAdress = this.onChangeAdress.bind(this);
    this.onChangePostalCode= this.onChangePostalCode.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.saveUser = this.saveUser.bind(this);
    

    this.state = {
      id: null,
      first_name:"",
      last_name:"",
      adress:"",
      postal_code:"",
      city:"",
      email:""
    };
  }

onChangeFirstName(e){
  this.setState({
    first_name: e.target.value
  });
}

  onChangeLastName(e){
  this.setState({
    last_name: e.target.value
  });
}

  onChangeAdress(e) {
    this.setState({
      adress: e.target.value
    });
  }

  onChangePostalCode(e) {
    this.setState({
      postal_code: e.target.value
    });
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  saveUser() {
    var data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      adress: this.state.adress,
      postal_code: this.state.postal_code,
      city: this.state.city,
      email: this.state.email
    };
    console.log(`donnees : ${data.first_name}+ ${data.last_name} + ${data.adress}`);
    this.props.history.push('/home');
  }

  newTutorial() {
    this.setState({
      id: null,
      first_name:"",
      last_name:"",
      adress:"",
      postal_code:"",
      city:"",
      email:""
    });
  }
render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="first_name">your name</label>
              <input
                type="text"
                className="form-control"
                id="first_name"
                required
                value={this.state.first_name}
                onChange={this.onChangeFirstName}
                name="first_name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Title</label>
              <input
                type="text"
                className="form-control"
                id="last_name"
                required
                value={this.state.last_name}
                onChange={this.onChangeLastName}
                name="last_name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="adress">Adresse</label>
              <input
                type="text"
                className="form-control"
                id="adress"
                required
                value={this.state.adress}
                onChange={this.onChangeAdress}
                name="adress"
              />
            </div>

            <div className="form-group">
              <label htmlFor="postal_code">Code postal</label>
              <input
                type="text"
                className="form-control"
                id="postal_code"
                required
                value={this.state.postal_code}
                onChange={this.onChangePostalCode}
                name="postal_code"
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">Ville</label>
              <input
                type="text"
                className="form-control"
                id="city"
                required
                value={this.state.city}
                onChange={this.onChangeCity}
                name="city"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="email"
              />
            </div>

            <button onClick={this.saveUser} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}


export default withRouter(Signup)