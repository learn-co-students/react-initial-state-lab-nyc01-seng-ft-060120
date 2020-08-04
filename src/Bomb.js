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
        let text = secondsLeft > 0 ? <p>{secondsLeft} seconds left before I go boom!</p> : <p>Boom!</p>
        return text
    }
}

export default Bomb

