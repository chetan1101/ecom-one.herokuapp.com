import React from 'react'
import { Carousel } from 'react-bootstrap'
import img1 from '../Media/001.jpg';
import img2 from '../Media/002.jpg';
import img3 from '../Media/003.jpg';

function HomeSlider() {
    return (
        
        <Carousel className="home_slider">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
     
    )
}

export default HomeSlider
