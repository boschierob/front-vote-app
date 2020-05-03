import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

import UserDataService from "../services/user.service";


class Signup extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeAdress = this.onChangeAdress.bind(this);
    this.onChangePostalCode= this.onChangePostalCode.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.saveUser = this.saveUser.bind(this);
    

    this.state = {
      id: null,
      first_name:"",
      last_name:"",
      adress:"",
      postal_code:"",
      city:"",
      email:"",
      password:""
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

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  saveUser() {
    var data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      adress: this.state.adress,
      postal_code: this.state.postal_code,
      city: this.state.city,
      email: this.state.email,
      password: this.state.password
    };
    UserDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          adress: response.data.adress,
          postal_code:response.data.postal_code,
          city: response.data.city,
          email: response.data.email,
          password: response.data.password
        });
        console.log(response.data);
        this.props.history.push('/signin');
      })
      .catch(e => {
        console.log(e);
      });
   
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
      <div className="sign submit-form">
          <h2>
             Inscription
          </h2>
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="row">
            <div className="form-group" style={{width:"40%"}} >
              <label htmlFor="first_name">Prenom</label>
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
            <div className="form-group" style={{marginLeft:"20px",width:"40%"}}>
              <label htmlFor="last_name">Nom</label>
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
            </div>
            
             <div className="row">
            <div className="form-group" style={{width:"70%"}}>
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
            </div>

            <div className="row">
            <div className="form-group" style={{width:"70%"}}>
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="form-control"
                id="password"
                required
                value={this.state.password}
                onChange={this.onChangePassword}
                name="password"
              />
            </div>
            </div>

            <div className="form-group" style={{marginLeft:"-20px",width:"100%"}}>
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
            <div className="row">
            <div className="form-group"   style={{width:"30%"}}>
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
            <div className="form-group"  style={{marginLeft:"20px",width:"50%"}}>
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
            </div>
           
            <button onClick={this.saveUser} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
        <div className="imageIn">

        </div>
      </div>
    );
  }
}


export default withRouter(Signup)