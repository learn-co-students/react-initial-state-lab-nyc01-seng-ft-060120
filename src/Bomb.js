 import React from 'react'
	
	class Bomb extends React.Component{
		
		constructor(props){
			super(props)
			this.state = {secondsLeft: this.props.initialCount }

		}
		

		render(){

    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;



			return(
				<div> 
					<h1>{message}</h1>
				</div>
			)
		}
	}

export default Bomb