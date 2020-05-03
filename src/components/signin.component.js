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

  		<div className="sign submit-form">
      <h2>
        Connection
      </h2>
  			<div className="row" >
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
          
            <div className="form-group">
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

            <button onClick={this.authUser} className="btn btn-success" style={{marginRight:"40%",marginTop:"15px",height:"100%"}}>
              Submit
            </button>
			    
         <div className="image2In">

        </div>
       
  		</div>



  		)
  }




}

export default withRouter(Signin)
