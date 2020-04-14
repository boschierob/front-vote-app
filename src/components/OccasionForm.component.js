import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import OccasionDataService from "../services/occasion.service";
import UserDataService from "../services/user.service";

class OccasionForm extends Component{

	constructor(props){
		super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeLimitDate = this.onChangeLimitDate.bind(this);
    this.saveOccasion = this.saveOccasion.bind(this);

		this.state= {
      id:null,	
			title: '',
			initiator:this.props.initiator,
      userId : this.props.userId,
			description: '',
			date: '',
			limit_date: ''
		};
	}

	onChangeTitle(e){
		 this.setState({
		    title: e.target.value
		  });
	}

	onChangeDescription(e){
		 this.setState({
		    description: e.target.value
		  });
	}

	onChangeDate(e){
		 this.setState({
		    date: e.target.value
		  });
	}

	onChangeLimitDate(e){
		 this.setState({
		    limit_date: e.target.value
		  });
	}

	saveOccasion(){
		var data ={
      title: this.state.title,
      description: this.state.description,
      initiator: this.props.initiator,
      date: this.state.date,
      limit_date: this.state.limit_date
    };
    	 OccasionDataService.create(data)
	      .then(response => {
	        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          initiator: response.data.initiator,
          date: response.data.date,
          limit_date:response.data.limit_date
        });
          UserDataService.pushOccasion(this.props.userId,response.data.id);

      })
      .catch(e => {
        console.log(e);
      });

    window.location.reload();
    
      
	}

  

	render(){
    return(
         <div style={{height:"500px"}}>
                <h2>votre id :{this.props.userId}</h2>
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
                <div className="form-group" style={{marginLeft:"20px",width:"40%"}}>
                  <label htmlFor="initiator">initiateur</label>
                  <input
                    type="email"
                    className="form-control"
                    id="initiator"
                    //required
                    readOnly
                    value={this.props.initiator}
                    //onChange={this.onChangeInitiator}
                    name="initiator"
                  />
                </div>
                </div>
                <div className="form-group" style={{marginLeft:"20px",width:"40%"}}>
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    required
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    name="description"
                  />
                </div>
              
                
                <div className="form-group" style={{marginLeft:"20px",width:"40%"}}>
                  <label htmlFor="date">Date de l'evenement</label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    required
                    value={this.state.date}
                    onChange={this.onChangeDate}
                    name="date"
                  />
                </div>
               
    
                <div className="form-group" style={{marginLeft:"20px",width:"40%"}}>
                  <label htmlFor="limit_date">Date limite du vote</label>
                  <input
                    type="date"
                    className="form-control"
                    id="limit_date"
                    required
                    value={this.state.limit_date}
                    onChange={this.onChangeLimitDate}
                    name="limit_date"
                  />
                </div>
               
    
                 <button onClick={this.saveOccasion} className="btn btn-success">
                  Submit
                </button>
    
              
          </div>)


	}

}


export default OccasionForm;

