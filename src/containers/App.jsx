import { useState } from "react";
import Header from "./Header/Header";
import { WEATHER_API_KEY } from "../../API";

import styles from "./App.module.css";

import backgroundVideo from "./backgroundVideo.mp4";
import MainContainer from "./MainContainer/MainContainer";

export default function App() {
  const [dataWeather, setDataWeather] = useState(null);

  const weather_API_URL = "https://api.openweathermap.org/data/3.0/";
  // const API_KEY = process.env.REACT_APP_API_KEY;

  function handleGetDataSearch(searchData) {
    
    let [lat, lon] = searchData.value.split(" ");
    const weatherFetch = fetch(
      `${weather_API_URL}onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${WEATHER_API_KEY}`
    );
    weatherFetch
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        
        setDataWeather({ city: searchData.label, ...data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className={styles.container}>
      <video
        className={styles.backgroundVideo}
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Header />
      <MainContainer
        onHandleGetSearchData={handleGetDataSearch}
        weatherData={dataWeather}
      >
        <div><p>{}</p></div>
      </MainContainer>
    </div>
  );
}
