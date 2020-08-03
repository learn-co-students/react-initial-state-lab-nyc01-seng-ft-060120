// your ImageSlider code here!
import React from 'react';

class ImageSlider extends React.Component {
    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }
    render() {
        return <li>I am on slide 0</li>

    }
}

export default ImageSlider;
