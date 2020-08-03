import React from 'react';

class Bomb extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    displayString = () => {
        if (this.state.secondsLeft === 0){
            return "Boom!"
        }
        else {
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }
    }

    render () {
        return (
            <h2>{this.displayString()}</h2>
        )
    }
}

export default Bomb;