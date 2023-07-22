import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import mobile from "../../img/mobile.jpeg"
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
        spaceBetween={100}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
        breakpoints={{
          320:{
            spaceBetween:20,
            slidesPerView:1,
          },
          640:{
            spaceBetween:10,
            slidesPerView:1,
          },
          768:{
            spaceBetween:200,
            slidesPerView:2,
          },
          1024:{
            spaceBetween:120,
            slidesPerView:3,
          }

        }}
      >
      <SwiperSlide>
          <img src={mobile} alt="" height={20} width={5}/>
        </SwiperSlide>
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
