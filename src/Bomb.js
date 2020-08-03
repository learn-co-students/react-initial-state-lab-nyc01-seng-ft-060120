import React from 'react'

class Bomb extends React.Component{
    constructor(props){

        super()
        console.log("this is initial count")
        this.state = {
        secondsLeft: props.initialCount
    }
    }
    render(){
        if (this.state.secondsLeft > 0){
            return `${this.state.secondsLeft} seconds left before I go boom!`
        } else {
            return `Boom!`
        }
    
    }
}
export default Bomb


