import React from "react";

class Bomb extends React.Component {
  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  handleClick = () => {
    return this.state.secondsLeft === 0  ? 'Boom!' :`${this.state.secondsLeft} seconds left before I go boom!`
  }

  render() {
    return <div>{this.handleClick()}</div>;
  }

}

export default Bomb;
