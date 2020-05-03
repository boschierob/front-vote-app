import React, { useState, Fragment, Component, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { VoteContext } from "../context/VoteContext";

import VoteDataService from "../services/vote.service";

//const voteFormContext = useContext(VoteContext);

const OptionsForm = (params) => {
	//initialise the form input fields
		//inputFields refers to the form fields, 
		//while setInputFields is the used to set the value for these form fields
	const [inputFields, setInputFields] = useState([
			{ option: ''}
		]);

	//setup the form 
	const handleSubmit = e => {
		e.preventDefault();
		console.log("inputFields", inputFields)
	};

	const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "option") {
      values[index].option = event.target.value;
    }/* else {
      values[index].lastName = event.target.value;
    }
*/
    setInputFields(values);
  };

  //handling adding and removing form fields

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ option: ''});
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

	return(
		<>
			<form onSubmit={handleSubmit}>
				<div className="form-row">
					<h3>
						OptionsForm component : a la question {params.question_id}
					</h3>
					{inputFields.map((inputField, index) => (
						<Fragment key={`${inputField}~${index}`}>
							
							<div className="form-group col-sm-6">
								<label htmlFor="option"> Option :</label>
								<input
									type="text"
									className="form-control"
									id="option"
									name="option"
									value={inputField.option}
									//include a change handler to cater for user input action.
									onChange={(event) =>{
										 handleInputChange(index, event);
										//this.props.changeOptionsHandler(event);
									}}
								/>
							</div>
							<div classname="form-group col-sm-2">
								<button
									className="btn btn-link"
									type="button"
									onClick={() => handleRemoveFields(index)}
								>
								Supprimer option de reponse
								</button>
								<button
									className="btn btn-link"
									type="button"
									onClick={() => handleAddFields()}
								>
								Ajouter une option de reponse
								</button>
							</div>
						</Fragment>
						))}
					</div>
					<div className="submit-button">
			          <button
			            className="btn btn-primary mr-2"
			            type="submit"
			            onSubmit={() =>setInputFields}
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


export default OptionsForm;
