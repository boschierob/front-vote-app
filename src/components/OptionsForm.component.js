import React, { useState, Fragment, Component, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { VoteContext } from "../context/VoteContext";

import VoteDataService from "../services/vote.service";

//const voteFormContext = useContext(VoteContext);

const OptionsForm = (params) => {

	//initialise the form input fields
		//inputFields refers to the form fields, 
		//while setInputFields is the used to set the value for these form fields
	const [options, setOptions] = useState([
			{ option: ''}
		]);
	


	const handleInputChange = (index, event) => {
    const values = [...options];
    var data = Object.values(options);
    if (event.target.name === "option") {
      values[index].option = event.target.value;
    }/* else {
      values[index].lastName = event.target.value;
    }
*/
    setOptions(values);

  };

  //handling adding and removing form fields

  const handleAddFields = () => {
    const values = [...options];
    values.push({ option: ''});
    setOptions(values);
  };

  const handleRemoveFields = index => {
    const values = [...options];
    values.splice(index, 1);
    setOptions(values);
  };

	return(
		<>
			
				<div className="form-row">
					<h3>
						OptionsForm component : a la question {params.question_id}
					</h3>
					{options.map((option, index) => (
						<Fragment key={`${option}~${index}`}>
							
							<div className="form-group col-sm-6">
								<label htmlFor="option"> Option :</label>
								<input
									type="text"
									className="form-control"
									id="option"
									name="option"
									value={option.option}
									//include a change handler to cater for user input action.
									onChange={(event) =>{
										 handleInputChange(index, event);
										//this.props.changeOptionsHandler(event);
									}}
								/>
							</div>

							<div  classname="form-group col-sm-2">
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
					<div className="submit-button">
			          <button
			            className="btn btn-primary mr-2"
			            type="button"
			            onClick={()=>params.handleSubmitAll(options)}
			          >
			            Save
			          </button>
			        </div>
					</div>
					
			       <br/>
						<pre>
						 {JSON.stringify(options, null, 2)}
						</pre>
			 
		</>
	)
}


export default OptionsForm;
