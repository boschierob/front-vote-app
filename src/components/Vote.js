import React,{ useState, Fragment } from 'react';
import Options from './Options';

const Vote = () => {

const [questions, setQuestions] = useState({
	questions:{
		question:'',
		options:[]
	}
});

const [inputFields, setInputFields] = useState([
	{questions:[]}]
  );

const handleAddFields = () => {
    const values = [...inputFields];
    values.push({question:''});
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "question") {
      values[index].question = event.target.value;
    } 

    setInputFields(values);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("inputFields", inputFields);
  };


	return(
			<>
      <h1>Ajouter les questions à voter avec les options de réponses :</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div className="form-group col-sm-6">
                <label htmlFor="question">Question à ajouter :</label>
                <input
                  type="text"
                  className="form-control"
                  id="question"
                  name="question"
                  value={inputField.question}
                  onChange={event => handleInputChange(index, event)}
                />

              </div>
              
              <div className="form-group col-sm-2">
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
              <Options />
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
  );
};

export default Vote;