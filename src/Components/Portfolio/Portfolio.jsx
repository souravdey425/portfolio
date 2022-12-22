import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import linkedinapp from "../../img/linkedinapp.png";
import foodorder from "../../img/foodorder.png";
import weatherapp from "../../img/weather.png";
import linkedinlogin from "../../img/loginlinkedin.png";
import linkedinpost from "../../img/linkedinpost.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={linkedinlogin} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={linkedinapp} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={foodorder} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={weatherapp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={linkedinpost} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
