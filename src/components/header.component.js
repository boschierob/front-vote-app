import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Signin from './signin.component';
import Board from './board.component';
import Signup from './signup.component';
import Home from './home.component';
import Tutorial from './tutorial.component';


class Header extends Component  {

		render(){
			return (
				<Router>
				<div>
					
					<header>
						<nav className="navbar navbar-expand navbar-dark bg-dark">
							<a href="/home" className="navbar-brand">
              					Vot'in-Copro
           					 </a>
           					 <div className="navbar-nav mr-auto">
				              <li className="nav-item">
				                <Link to={"/aide"} className="nav-link">
				                  Aide
				                </Link>
				              </li>
				              <li className="nav-item">
				                <Link to={"/signup"} className="nav-link">
				                  S'inscrire
				                </Link>
				              </li>
				              <li className="nav-item">
				                <Link to={"/signin"} className="nav-link">
				                  Se connecter
				                </Link>
				              </li>
				              <li className="nav-item">
				                <Link to={"/tutorial"} className="nav-link">
				                  Tutorial
				                </Link>
				              </li>
				              <button style={{position:"inline-block"}} className="btn btn-primary">
				                <Link to={"/create"} className="btn btn-primary">
				                  Créer un vote  
				                </Link>
				              </button>
				            </div>
						</nav>
					
					</header>
					
					 <div className="container mt-3">
                <Switch>
                  <Route exact path={["/", "/home"]} component={Home}/>
                  <Route exact path={"/signup"} component={Signup}/>
                   <Route path={"/board/:email"} render={(props) => <Board {...props}/>}/>
                  <Route exact path={"/signin"} component={Signin}/>
                  <Route exact path={"/tutorial"} component={Tutorial}/>
                </Switch>
              </div>

				</div>
			</Router>
				)
		}
}

export default Header;


