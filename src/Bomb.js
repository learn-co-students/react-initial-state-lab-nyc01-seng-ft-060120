import React from 'react'; 
import { render } from 'enzyme';

class Bomb extends React.Component{

  constructor(props){
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render(){
    // console.log(this.props.initialCount)
    let secondsLeft = this.state.secondsLeft
    let message = secondsLeft === 0 ? `Boom!`: `${secondsLeft} seconds left before I go boom!`
    return(
      <p>{message}</p>
    )
  }
  
}

export default Bomb;

// '<SECONDS_LEFT> seconds left before I go boom!', where <SECONDS_LEFT> is the value of secondsLeft.

// If secondsLeft equals 0, it should render 'Boom!' instead.