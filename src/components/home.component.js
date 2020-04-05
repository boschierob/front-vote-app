import React, { Component } from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



class Home extends Component  {

		render(){
			return (
			<div className="container" style={{height:"1000px"}} >
				<div className="card" style={{margin:"100px"}}>
					<div className="card-body" >
					<h2 className="card-title">
						Qu'est-ce que Vot'in Copro ?
					</h2>
					<p className="card-text" >
						Vot'in Copro est une application en ligne de vote a distance.
						Celle-ci vous permet d'organiser des votes où que vous soyez.
						Vous êtes capables ainsi de proposer le vote des decisions pour votre AG de copropriete, ou bien faire des sondages aupres des coproprietaires.
						Tout se passe en ligne, vous n'avez qu'a renseigner l'evenement, les questions avec les differents choix disponibles, puis de lister dans notre formulaire les coordonnees de vos participants.                     
					</p>
					<p className="card-text" >
						Ensuite, notre application se chargera d'envoyer les notification de l'ouverture des votes a vos participants, par l'envoi automatique d'email.
						Vous pourrez aussi par la suite, gerer l'evenement en question, apporter des modifications comme le changement de la date limite, ou rajouter des participants, voire clôre le vote.
					</p>
					<p className="card-text">
						Suivez cette quelques etapes afin d'organiser un vote en ligne:        
					</p>
				</div>
				</div>
					<h2 className="card-title">
					Suivez cette quelques etapes afin d'organiser un vote en ligne:  
					</h2>
				<div class="row">
				  <div class="col-sm-4">
				    <div class="card">
				      <div class="card-body">
				        <h5 class="card-title">Etape 1</h5>
				        <h6 class="card-subtitle">Creer votre compte administrateur</h6>
				        <p class="card-text">Cliquer sur S'enregistrer</p>
				         <p class="card-text">Puis remplir les champs</p>
				        <a href="#" class="btn btn-primary">Go somewhere</a>
				      </div>
				    </div>
				  </div>
				  <div class="col-sm-4">
				    <div class="card">
				      <div class="card-body">
				        <h5 class="card-title">Etape 2</h5>
				        <h6 class="card-subtitle">Creer un nouveau vote</h6>
				        <p class="card-text">Cliquer sur Creer un vote</p>
				         <p class="card-text">Puis remplir les champs, en entrant un nouvel evenement, ensuite les questions et les differents choix que vous souhaitez proposer</p>
				        <a href="#" class="btn btn-primary">Go somewhere</a>
				      </div>
				    </div>
				  </div>
				   <div class="col-sm-4">
				    <div class="card">
				      <div class="card-body">
				        <h5 class="card-title">Etape 3</h5>
				        <h6 class="card-subtitle">Valider votre evenement</h6>
				        <p class="card-text">Cliquer sur Valider</p>
				         <p class="card-text">La validation vous permettra d'envoyer les notification a tous les participants de maniere automatique</p>
				        <a href="#" class="btn btn-primary">Go somewhere</a>
				      </div>
				    </div>
				  </div>
				</div>

			</div>
				)
		}
}

export default Home;