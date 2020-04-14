import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import OccasionDataService from "../services/occasion.service";


class OccasionEdit extends Component {
	constructor(props){
		super(props);

		this.state= {
			occasion:{
						id:null,
						title: '',
						description: '',
						date: '',
						limit_date: ''
					}
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

	     
	}

	render(){
		return (
			<div>
				<h1>
				PAGE D'EDITION DE L'EVENEMENT {this.state.occasion.title}
				</h1>
			</div>

			)
	}
}

export default OccasionEdit;