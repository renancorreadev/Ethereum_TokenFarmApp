import slide1 from '../../assets/slides/slide-1.jpg'
import slide2 from '../../assets/slides/slide-2.jpg'

import { Carousel } from 'react-bootstrap'
import './styles.css'

export default function MainCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="img1 d-block w-100 h-100"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img2 d-block w-100 h-100"
          src={slide2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
