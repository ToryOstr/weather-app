import FormatDate from "../FormatDate/FormatDate";
import { icons } from "../../assets/WeatherIcon/WeatherIcon";
import OtherParameters from "../OtherParameters/OtherParameters";
import WindDirection from "../WindDirection/WindDirection";

import styles from "./WeatherCard.module.css";
export default function WeatherCard({ dataDay }) {
  const imgSrc = dataDay && icons[dataDay.weather[0].icon];

  return (
    <div className={styles.cardContainer}>
      <span className={styles.forecastDate}>
        <FormatDate date={dataDay.dt * 1000} />
      </span>
      <div className={styles.weatherInformation}>
        <p>{dataDay.summary}</p>
        <p>Min temp {Number.parseInt(dataDay.temp.min) + `ºC`}</p>
        <p>Max temp {Number.parseInt(dataDay.temp.max) + `ºC`}</p>

        <div className={styles.otherParameters}>
          <OtherParameters
            parameterName={"Wind"}
            value={dataDay.wind_speed}
            metric={"m/s"}
            img={WindDirection(dataDay.wind_deg)}
          />

          <OtherParameters
            parameterName={"Humidity"}
            value={dataDay.humidity}
            metric={"%"}
          />

          <OtherParameters
            parameterName={"Pressure"}
            value={dataDay.pressure}
            metric={"hPa"}
          />
        </div>

        <div className={styles.weatherIconWrapp}>
          <img className={styles.weatherIcon} src={imgSrc} alt="weather icon" />
        </div>
      </div>
    </div>
  );
}
