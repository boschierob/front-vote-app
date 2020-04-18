import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import OccasionDataService from "../services/occasion.service";
import VoteDataService from "../services/vote.service";
import VoteForm from "./VoteForm.component";

class OccasionEdit extends Component {
	constructor(props){
		super(props);

		this.state= {
			occasion:{
						id:null,
						title: '',
						description: '',
						date: '',
						limit_date: '',
					},
			votes:[{}]
		}
	}

	componentDidMount(){
		OccasionDataService.get(this.props.match.params.id)
			.then(response => {
	          this.setState({
	            occasion : response.data
	          });
	          console.log(response.data);
	        }) 
	        .catch(err => console.log(err));

	    VoteDataService.getAllVotes()
	    	.then(response => {
	    		this.setState({
	    			votes:response.data	
	    		});
	    		
	    	 console.log(response.data);
	        }) 
	        .catch(err => console.log(err));
	     
	}

	render(){
		return (
			<div>
				<h1>
				PAGE D'EDITION DE L'EVENEMENT {this.state.occasion.title}
				</h1>
				<ul>
					{this.state.votes.map((vote,index) =>(
						<li key={index}>
						{vote.title}
						</li>
					))}
				</ul>
				<VoteForm occasionId={this.state.occasion.id}/>
			</div>

			)
	}
}

export default OccasionEdit;