import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {VoteContext} from "../context/VoteContext";

import VoteDataService from "../services/vote.service";
import OccasionDataService from "../services/occasion.service";


import OptionsForm from "./OptionsForm.component.js";

class QuestionForm extends React.Component{
	constructor(props){
		super(props);
		this.onChangeQuestion = this.onChangeQuestion.bind(this);
		this.saveQuestion = this.saveQuestion.bind(this);

		this.state = {
					id:null,
					question:''
					
			
		}
	}

	onChangeQuestion(e){
		 this.setState({
		    question: e.target.value
		  });
	}

	saveQuestion(){
		var data ={
      question: this.state.question,
    };
    
    	 VoteDataService.create(data)
	      .then(response => {
	        this.setState({
          questions: response.data
        });
          OccasionDataService.pushQuestion(this.props.occasionId,response.data);

      })
      .catch(e => {
        console.log(e);
      });

    window.location.reload();
    
      
	}

	render(){
		return(
			
				<form onSubmit={this.saveQuestion}>
						<div className="form-row">
							<Fragment>
								<div className="form-group col-sm-6">
									<label htmlFor="question"> Question</label>
									<input
										type="text"
										className="form-control"
										id="question"
										name="question"
										value={this.state.question}
										//include a change handler to cater for user input action.
										onChange={this.onChangeQuestion}
									/>
								</div>

								<br/>
							<pre>
							 {JSON.stringify(this.state, null, 2)}
							</pre>

								
							</Fragment>
						</div>
						<div className="submit-button">
				          <button
				            className="btn btn-primary mr-2"
				            type="submit"
				            onSubmit={this.saveQuestion}
				          >
				            Save
				          </button>
				        </div>
				       
				 </form>


			)
	}
}

export default QuestionForm;
