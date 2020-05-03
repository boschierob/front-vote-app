import React, {Fragment, useRef } from 'react';
import { ReactComponent as Wave} from '../images/wave.svg'
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Home = () => {

	return (
		<Fragment>
			<section className="content" >
				<h2>Votre application de vote en ligne</h2>
				<p>
					I-vote est une solution de vote en ligne qui vous permet d'organiser des sessions de votes par internet.<br />
					Vous pouvez creer un evenement comme un sondage ou un vote en AG aupres de vos coproprietaitres, associes.
				</p>
				<Wave className="wave"/>
				<button className="btn-primary">
			Creer un vote
			</button>
			<button className="btn-danger">
			Voter a un evenement
			</button>
			</section>
			<article className="content">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum facere, iure! Id cum, molestias eos sed nisi esse eligendi ducimus excepturi similique magnam ipsa quaerat, impedit nam maiores incidunt debitis!
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum facere, iure! Id cum, molestias eos sed nisi esse eligendi ducimus excepturi similique magnam ipsa quaerat, impedit nam maiores incidunt debitis!
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum facere, iure! Id cum, molestias eos sed nisi esse eligendi ducimus excepturi similique magnam ipsa quaerat, impedit nam maiores incidunt debitis!
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum facere, iure! Id cum, molestias eos sed nisi esse eligendi ducimus excepturi similique magnam ipsa quaerat, impedit nam maiores incidunt debitis!
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum facere, iure! Id cum, molestias eos sed nisi esse eligendi ducimus excepturi similique magnam ipsa quaerat, impedit nam maiores incidunt debitis!
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum facere, iure! Id cum, molestias eos sed nisi esse eligendi ducimus excepturi similique magnam ipsa quaerat, impedit nam maiores incidunt debitis!
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum facere, iure! Id cum, molestias eos sed nisi esse eligendi ducimus excepturi similique magnam ipsa quaerat, impedit nam maiores incidunt debitis!
			</p>

			</article>
			
		</Fragment>
			
				)




}


export default Home;
