import React, { ReactNode } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ButtonCarouselProps {
  children: ReactNode[];
}

const ButtonCarousel: React.FC<ButtonCarouselProps> = ({ children }) => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {React.Children.map(children, (child, index) => (
        <div key={index}>{child}</div>
      ))}
    </Slider>
  );
};

export default ButtonCarousel;
