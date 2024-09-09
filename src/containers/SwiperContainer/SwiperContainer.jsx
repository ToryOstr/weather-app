import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay, Navigation } from "swiper/modules";
import WeatherCard from "../../components/WeatherCard/WeatherCard";

import styles from "./SwiperContainer.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default function SwiperContainer({ dataWeather }) {
  console.log(dataWeather);

  let swiper = dataWeather ? (
    <Swiper
      scrollbar={{ hide: false }}
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      modules={[Scrollbar, Autoplay, Navigation]}
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      className={styles.swiperWrapp}
    >
      {dataWeather.daily.map((day, index) => {
        return (
          <SwiperSlide key={index}>
            <WeatherCard dataDay={day} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  ) : null;
  return swiper;
}
