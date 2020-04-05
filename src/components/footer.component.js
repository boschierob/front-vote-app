					
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



class Footer extends Component  {

		render(){
			return (
					<footer>
						 <div class="card-footer text-muted">
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
				                <Link to={"/presentation"} className="nav-link">
				                  Qui sommes nous?
				                </Link>
				              </li>
				              <li className="nav-item">
				                <Link to={"/mentions"} className="nav-link">
				                  Mentions légales
				                </Link>
				              </li>
				              <li className="nav-item">
				                <Link to={"/rgpd"} className="nav-link">
				                  RGPD
				                </Link>
				              </li>
				              <li className="nav-item">
				                <Link to={"/contact"} className="nav-link">
				                  Contact
				                </Link>
				              </li>
				              </div>
						    </nav>
						  </div>
						
					</footer>
					)
		}
}

export default Footer;

