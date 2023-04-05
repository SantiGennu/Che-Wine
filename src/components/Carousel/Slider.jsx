import { Carousel } from "react-bootstrap";
import RedWine from "../../assets/vino tinto.jpg";
import WhiteWine from "../../assets/vino blanco1.jpg";
import Rose from "../../assets/vino rosado.jpg";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <div className="gradient"></div>
          <img className="red-wine" src={RedWine} alt="red wine" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="gradient"></div>
          <img className="white-wine" src={WhiteWine} alt="white wine" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="gradient"></div>
          <img className="rose" src={Rose} alt="rose" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
