import React, {Component} from 'react'
import './../App.css'
/* import VoteButton from './../components/VoteButton' */


class VotingField extends Component {


    incrementCounter=()=>{
        this.setState({counter: this.state.counter+1});
    }
    state = {lenguage: this.props.lenguage, counter: 0}


    render () {
        return (
            <div className="languages">
                <div className  = "voteCount">{this.state.counter}</div>    
                <div className  = "language">{this.state.lenguage}</div>     
                <button className = "language" onClick={this.incrementCounter}>Vote!</button>
            </div>
        )
    }
}
export default VotingField