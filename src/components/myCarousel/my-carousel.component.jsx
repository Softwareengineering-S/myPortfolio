import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './my-carousel.style.css'
import Slide1 from '../../assets/img/carousal/slide1.webp'
import Slide2 from '../../assets/img/carousal/slide2.webp'
import Slide3 from '../../assets/img/carousal/slide3.webp'
import ScrollDown from '../scroll-down/scroll-down.component'

const myCarousel = () => {
    return (
         <div id="home">
          <Carousel controls={false} indicators interval={2500} pause={false}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide1}
      alt="First slide"
    />
    </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide2}
      alt="Second slide"
    />
</Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide3}
      alt="Third slide"
    />
</Carousel.Item>
</Carousel> 
<ScrollDown/>
        </div>
    )
}

export default myCarousel
