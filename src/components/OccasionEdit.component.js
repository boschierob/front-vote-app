import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import OccasionDataService from "../services/occasion.service";
import VoteDataService from "../services/vote.service";

import OptionsForm from "./OptionsForm.component";
import QuestionForm from "./QuestionForm.component";
import Vote from "./Vote";



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
					},
			votes:[{}],
			currentVote: null,
        	currentIndexVote: -1,
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

	    VoteDataService.getVotesByOccasion(this.props.match.params.id)
	    	.then(response => {
	    		this.setState({
	    			votes:response.data	
	    		});
	    		
	    	 console.log(response.data);
	        }) 
	        .catch(err => console.log(err));
	     
	}

	 setActiveVote(vote, index){
    this.setState({
          currentVote:vote,
          currentIndexVote: index
    
        });
  }

	render(){
		return (
			<div>
				<h1>
				PAGE D'EDITION DE L'EVENEMENT {this.state.occasion.title}
				</h1>
				<ul>
				
					{this.state.votes.map((vote,index) =>(
						<li 
						className={
                 		 "list-group-item " +
                  		(index === this.state.currentIndexVote ? "active" : "")
                		}
						onClick={() => this.setActiveVote(vote, index)}
						key={index}>
						{vote.title}
						</li>
					))}
				</ul>
				<div className="col-md-6">	
				{this.state.currentVote ? (
					<Vote id={this.state.votes[this.state.currentIndexVote]._id}/>
					)	: (
					<div>
					Selectionnez un vote...
					</div>

					)
				}
				</div>
			
				
			</div>

		)
	}
}

export default OccasionEdit;
