import Slider from "react-slick";

import styles from "./Hero.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "../assets/slide1.webp";
import slide2 from "../assets/slide2.webp";

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dotsClass: `slick-dots ${styles.customDots}`,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img
            src={slide1}
            alt="slide1"
            className="w-full h-[400px] object-cover "
          />
        </div>
        <div>
          <img
            src={slide2}
            alt="slide2"
            className="w-full h-[400px] object-cover "
          />
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
