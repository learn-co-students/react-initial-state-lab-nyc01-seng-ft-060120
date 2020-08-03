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
            window.setTimeout(this.changeSeconds, 1000)
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }
    }

    changeSeconds = () => {
        let seconds = this.state.secondsLeft
        this.setState({secondsLeft: --seconds})
    }

    render () {
        console.log('render')
        return (
            <h2>{this.displayString()}</h2>
        )
    }
}

export default Bomb;