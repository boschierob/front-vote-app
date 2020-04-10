import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

import UserDataService from "../services/user.service";


class Signin extends Component {

	constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.authUser = this.authUser.bind(this);

    this.state = {
	   email:"",
	   password:""
	};
  }

   onChangeEmail(e){
  	this.setState({
  	  		email: e.target.value
  	  	});
  }

  onChangePassword(e){
  	this.setState({
  	  		password: e.target.value
  	  	});
  }


  authUser(){
  		var data = {
  			email: this.state.email,
  			password: this.state.password
  		};

  		UserDataService.authUser(data)
  			.then(response => {
  				this.setState({
		          email: response.data.email,
		          password: response.data.password
		  		});
		  		 console.log(response.data);
        			this.props.history.push(`/board/${data.email}`);
        	})
		  	.catch(e=>{
		  		console.log(e);
		 	});
  }



  render(){
  	return(
  		<div className="submit-form" style={{width:"70%"}}>
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

			 <button onClick={this.authUser} className="btn btn-success">
              Submit
            </button>


  		</div>



  		)
  }




}

export default withRouter(Signin)
