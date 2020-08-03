import React from 'react'; 
import { render } from 'enzyme';

class ImageSlider extends React.Component{
  constructor(){
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }
  render(){
    let currentSlide = this.state.currentSlideIndex
    return(
      <p>{`I am on slide ${currentSlide}`}</p>
    )
  }
}

export default ImageSlider;