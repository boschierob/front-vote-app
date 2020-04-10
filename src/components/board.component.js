import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import UserDataService from "../services/user.service";

class Board extends Component {
	constructor(props){
		super(props);

		this.state = {
			currentUser:{
				  id:null,
		          email:'',
		          first_name:'',
		          last_name:'',
		          adress:''
			}
          
      };
	}
	

	componentDidMount(){
		
      UserDataService.getByEmail(this.props.match.params.email)
        .then(response => {
          this.setState({
            currentUser : response.data
          });
          console.log(response.data);
        }) 
        .catch(err => console.log(err));
    
	}

	


	render(){
			return(
				<div>
					<button style={{position:"relative",marginRight:"-600px"}}>
						Disconnect
					</button>
					<h1>Board page</h1>
					<div className="card text-white bg-info mb-9" style={{maxWidth: "120rem"}}>
					  <div className="card-header">Bonjour {this.state.currentUser.first_name}</div>
					  <div className="card-body">
					    <h5 className="card-title">Vos donnees</h5>
					    <p className="card-text">Ci desous vous trouverez vos coordonnees telles qoe vous les avez enregistrees</p>
					  	<h2>Votre Nom</h2>
					  	<p>{this.state.currentUser.first_name}</p>
					  	<h2>Votre Prenom</h2>
					  	<p>{this.state.currentUser.last_name}</p>
					  	<h2>Votre Adresse</h2>
					  	<p>{this.state.currentUser.adress}</p>
					  	<p>{this.state.currentUser.postal_code} {this.state.currentUser.city}</p>

					  </div>
					</div>

					<div className="card text-white bg-dark mb-9" style={{marginTop:"10px",maxWidth: "120rem"}}>
					  <div className="card-header">Vos evenements:</div>
					  <div className="card-body">
					    <h5 className="card-title">Les votes en cours</h5>
					    <p className="card-text">Ci desous vous trouverez vos coordonnees telles qoe vous les avez enregistrees</p>
					  	<h2>Votre Nom</h2>
					  	<p>{this.state.currentUser.first_name}</p>
					  	<h2>Votre Prenom</h2>
					  	<p>{this.state.currentUser.last_name}</p>
					  	 <h5 className="card-title">Les votes termines</h5>
					  	<h2>Votre Adresse</h2>
					  	<p>{this.state.currentUser.adress}</p>
					  	<p>{this.state.currentUser.postal_code} {this.state.currentUser.city}</p>

					  </div>
					</div>

				</div>
			

				)

		}


}




export default Board;