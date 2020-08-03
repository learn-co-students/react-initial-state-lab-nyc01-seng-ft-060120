// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        if (this.state.secondsLeft === 0) {
            return <li>Boom!</li>
        } else {
            return <li>{this.state.secondsLeft} seconds left before I go boom!</li>
        }
        
    }
}

export default Bomb;
