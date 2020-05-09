import React,{ useState, Fragment } from 'react';
import OptionsForm from './OptionsForm.component';
import VoteDataService from "../services/vote.service";

const Vote = (props) => {


const [question, setQuestion] = useState(
	''
  );


const[next, setNext] = useState(false);


const handleInputChange = (event) => {

    setQuestion(event.target.value);
  };

 const handleSubmit = e => {
    e.preventDefault();
    //post to database

    var data = {
      question
    };
    var id = props.id;

    VoteDataService.addQuestionToVote(id,data)
    .then(console.log(data))
      .then(response => {
        data=({
        	question:response.data.question
        });
        console.log(response.data);
        
      })
      .catch(e => {
        console.log(e);
      });
  		//console.log(options);
  };

  const handleSubmitAll = (d) =>{
  	
   	var data = {
      question:question,
      options:d
    };
    var id = props.id;
    console.log('les data sont :'+JSON.stringify(d, null, 2)+' et '+id+' question:'+question)

  	 VoteDataService.addQuestionOptionsToVote(id,data)
      .then(response => {
        data=({
          question:response.data.question,
        	options:response.data.options
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  		//console.log(options);
  };


  	

const handleNext = ()=>{
	setNext(true);
}


	return(
			<>
      <h1>Ajouter les questions à voter avec les options de réponses :</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
         
            <Fragment>
              <div className="form-group col-sm-6">
                <label htmlFor="question">Question à ajouter au vote {props.id}:</label>
                <input
                  type="text"
                  className="form-control"
                  id="question"
                  name="question"
                  value={question}
                  onChange={event => handleInputChange(event)}
                />

              </div>
              
            </Fragment>
 
        </div>
        
        <div className="submit-button">
          <button
            className="btn btn-primary mr-2"
            type="submit"
            onClick={handleSubmit}
          >
            Save
          </button> 
        </div>
        <div className="col-md-6">	
				{next ? (
					<OptionsForm voteId={props.id} handleSubmitAll={handleSubmitAll}/>
					)	: (
				<button 
		         onClick={handleNext}
		         
		          > Ajouter des options de reponses a la question
		         </button>
		         )
				}
		</div>
        <br/>
        <pre>
          {JSON.stringify(question, null, 2)}
           
        </pre>
      </form>
    </>
  );
};

export default Vote;