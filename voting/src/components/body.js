import React from 'react'
import './../App.css'
import VotingField from './VotingField'

const Body = ({lenguages}) => (
	<div className ="VotingBox">
	{lenguages.map(leng=><VotingField key={leng} lenguage={leng}/>)}
	</div>
)



export default Body