import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  
    autoplaySpeed: 2000, 
    arrows: false,  
  };

  return (
    <div className="w-full mx-auto">
      <Slider {...settings}>
        <div>
          <img src="/images/banner1.png" alt="Banner 1" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/banner2.png" alt="Banner 2" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/banner3.png" alt="Banner 3" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/banner4.png" alt="Banner 2" className="w-full h-auto" />
        </div>
      </Slider>
    </div>
  );
};

export default BannerCarousel;
