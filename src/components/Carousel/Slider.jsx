import { Carousel } from "react-bootstrap"
import RedWine from "../../assets/vino tinto.jpg"
import WhiteWine from "../../assets/vino blanco1.jpg"
import Rose from "../../assets/vino rosado.jpg"
import "./Slider.css"

const Slider = () => {
    return (
        <div className="carousel-container">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="red-wine"
                        src={RedWine}
                        alt="red wine"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="white-wine"
                        src={WhiteWine}
                        alt="white wine"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="rose"
                        src={Rose}
                        alt="rose"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )

}

export default Slider