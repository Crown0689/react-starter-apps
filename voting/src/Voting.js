import React,{Component} from 'react';
import './App.css';
import Body from './components/body'
import {lenguages} from './components/lenguages'






class Voting extends Component{


	render(){
		
		return(
			<div> 
				<h1>Welcome to the Voting app</h1>
				<Body lenguages={lenguages}/>
			</div>
			
		);
	}
}
export default Voting;