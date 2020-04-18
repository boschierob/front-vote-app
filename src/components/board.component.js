
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import UserDataService from "../services/user.service";
import OccasionDataService from "../services/occasion.service";


import OccasionForm from "./OccasionForm.component";


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
			},
			occasions:[{
							id:null,
							title: '',
							description: '',
							date: '',
							limit_date: ''
						}],
			votes:[{
				id:null,
				title:''
			}]
          
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

       OccasionDataService.getByInitiator(this.props.match.params.email)
        .then(response => {
          this.setState({
            occasions : response.data
          });
          console.log(response.data);
        }) 
        .catch(err => console.log(err));
    
	}

	removeOccasion(id){
		if(window.confirm('Are you sure you wish to delete this event ?'))
			{
              OccasionDataService.delete(id)
                .then( response => {
                  return(
                    <div className="alert alert-primary" role="alert">
                     occasion removed succefully!
                    </div>);
                  console.log(response);
                })
                .catch( err => {
                  console.log(err)
                });
        	window.location.reload();
    	} 
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
					  	<h5>Votre Nom</h5>
					  	<p>{this.state.currentUser.first_name}</p>
					  	<h5>Votre Prenom</h5>
					  	<p>{this.state.currentUser.last_name}</p>
					  	<h5>Votre Adresse</h5>
					  	<p>{this.state.currentUser.adress}</p>
					  	<p>{this.state.currentUser.postal_code} {this.state.currentUser.city}</p>
					  	<h6>Votre id : {this.state.currentUser.id}</h6>

					  </div>
					</div>

					<div className="card text-white bg-dark mb-9" style={{marginTop:"10px",maxWidth: "120rem"}}>
					  <div className="card-header">Vos evenements:</div>
					  <div className="card-body">
					  {this.state.occasions
		                  && this.state.occasions.map((occasion,index) => (
			                <li
			                key={index}
			                >
			                  {occasion.title} 
			                 	 <button className="m-3 btn btn-sm btn-danger"
                						onClick={() => this.removeOccasion(occasion.id)}>
			                		Delete
			                	</button>
			                	 <Link to={"/occasions/one/"+occasion.id}
				                    className="badge badge-warning"
				                    occasion={occasion.title}
				                  >
				                  Edit
				                  </Link>
			                </li>
			               

		                ))}
					   <OccasionForm initiator={this.state.currentUser.email} userId={this.state.currentUser.id}/>
					   

					  </div>
					</div>

					

				</div>
			

				)

		}


}

export default Board;
