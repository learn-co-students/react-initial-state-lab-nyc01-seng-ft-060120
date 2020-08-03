// your Bomb code here!
import React from 'react'

class Bomb extends React.Component{
    constructor(props) { //props that the component gets from its parent
        super()
        this.state = { //define initial state with a key of 'someKey' set to the 'someValue' prop
        secondsLeft: props.initialCount
        }
      }

    render(){
        return(
           this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
        )
    }
}

export default Bomb