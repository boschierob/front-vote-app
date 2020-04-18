import React, { useState, Fragment, Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import VoteDataService from "../services/vote.service";

const VoteForm = () => {
	//initialise the form input fields
		//inputFields refers to the form fields, 
		//while setInputFields is the used to set the value for these form fields
	const [inputFields, setInputFields] = useState([
			{ question: ''}
		]);

	//setup the form 
	const handleSubmit = e => {
		e.preventDefault();
		console.log("inputFields", inputFields)
	};

	const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "question") {
      values[index].question = event.target.value;
    }/* else {
      values[index].lastName = event.target.value;
    }
*/
    setInputFields(values);
  };

  //handling adding and removing form fields

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ question: ''});
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

	return(
		<>
			<h1>
				Dynamic Form Fields vote
			</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-row">
					{inputFields.map((inputField, index) => (
						<Fragment key={`${inputField}~${index}`}>
							<div className="form-group col-sm-6">
								<label htmlFor="question"> Question</label>
								<input
									type="text"
									className="form-control"
									id="question"
									name="question"
									value={inputField.question}
									//include a change handler to cater for user input action.
									onChange={event => handleInputChange(index, event)}
								/>
							</div>
							<div classname="form-group col-sm-2">
								<button
									className="btn btn-link"
									type="button"
									onClick={() => handleRemoveFields(index)}
								>
								-
								</button>
								<button
									className="btn btn-link"
									type="button"
									onClick={() => handleAddFields()}
								>
								+
								</button>
							</div>
						</Fragment>
						))}
					</div>
					<div className="submit-button">
			          <button
			            className="btn btn-primary mr-2"
			            type="submit"
			            onSubmit={handleSubmit}
			          >
			            Save
			          </button>
			        </div>
			       <br/>
						<pre>
						 {JSON.stringify(inputFields, null, 2)}
						</pre>
			  </form>
		</>
	)
}
/*
class VoteForm extends Component{

	constructor(props){
		super(props);
		this.onChangeTitle = this.onChangeTitle.bind(this);

		this.state={
			title: '',
		    questions: [
		    	{	
		    		question:'',
		    		options:[
		    			''
		    		]
		    	}
		    ],
		    voters: [
		    	{voter:''}
		   	],
		    limit_date: ''
		}


	}

	onChangeTitle(e){
			 this.setState({
		    title: e.target.value
		  });
	}

	 newQuestion() {
	    
	    	return(
	    		<div>
	    			<h3>
	    				Ici composant question
	    			</h3>
	    		</div>
	    	);

	    
	    	
  	}


	render(){
		return <div>
					<h1>Ceci est le formulaire de vote de l'occasion: {this.props.occasionId}</h1>
					<div className="row" >
		                <div className="form-group" style={{width:"40%"}} >
		                  <label htmlFor="title">Titre</label>
		                  <input
		                    type="text"
		                    className="form-control"
		                    id="title"
		                    required
		                    value={this.state.title}
		                    onChange={this.onChangeTitle}
		                    name="title"
		                  />
		                </div>
		                
		                <button onClick={this.newQuestion()}> 
		                Ajouter une question
		                </button>
	                </div>
				</div>
	}
}

*/

export default VoteForm;
