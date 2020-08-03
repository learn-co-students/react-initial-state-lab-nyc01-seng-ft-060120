// your ImageSlider code here!
import React from 'react'

class ImageSlider extends React.Component {

    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    render() {
        return <h4>I am on slide {this.state.currentSlideIndex}</h4>;
    }
}

export default ImageSlider;