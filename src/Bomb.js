import React, { Component } from 'react'

class Bomb extends Component {

    constructor(props) {
        super(props);
        this.state = {
            secondsLeft: this.props.initialCount
        }    
    }

    render() {
        let secondsLeft = this.state.secondsLeft
        if (secondsLeft > 0) {
        return <p>{secondsLeft} seconds left before I go boom!</p>
        } else {
            return <p>Boom!</p>
        } 
    }
}

export default Bomb
