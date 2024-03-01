import React from "react";
import Image from "next/image";
import styles from "./CurrentWeather.module.css";
const CurrentWeather = ({ weatherData }) => {
  const formatLocalTime = (timestamp, timezone) => {
    // Convert UNIX timestamp to milliseconds
    const unixTime = timestamp * 1000;
    // Get the timezone offset in milliseconds
    const offset = timezone * 1000;
    // Create a new Date object adjusted with the timezone offset
    const localDate = new Date(unixTime + offset);



    const formattedTime = localDate.toLocaleTimeString("en-US", {
      timeZone: "UTC",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    console.log(formatLocalTime);
    return formattedTime;
  };

  const getWeatherIcon = (weatherCondition) => {
    switch (weatherCondition) {
      case "Clear":
        return "/clear 3.png";
      case "Clouds":
        return "/clouds 1.png";
      case "Rain":
        return "/drizzle 1.png";
      case "Snow":
        return "/snow 1.png";
      default:
        return "/clear 3.png"; // Default to a sunny icon
    }
  };

  return (
    <div className={styles.weatherbox}>
      <div>
        {weatherData && (
          <div className={styles.feelsLikeContainer}>
            <p className={styles.tempPara}>
              {/* {Math.round(weatherData.list[0].main.temp - 273.15)}°C */}
              {Math.round(weatherData.list[0].main.temp - 273.15)}°C
            </p>
            {/* <p>Feels Like: <span className={styles.feelsLike}> {Math.round(weatherData.list[0].main.feels_like - 273.15)}°C</span></p> */}
            <p>
              Feels Like:{" "}
              <span className={styles.feelsLike}>
                {" "}
                {Math.round(weatherData.list[0].main.feels_like - 273.15)}°C
              </span>
            </p>
          </div>
        )}
        <div className={styles.weatherDet}>
          <div className={styles.weatherItem}>
            <Image
              src="/sunrise.png"
              alt="Sunrise Icon"
              width={40}
              height={40}
              className={styles.imgColor}
            />
            {weatherData && (
              <p>
                Sunrise
                <br />
                {formatLocalTime(
                  weatherData.city.sunrise,
                  weatherData.city.timezone
                )}
              </p>
            )}
          </div>
          <div className={styles.weatherItem}>
            <Image
              src="/sunset.png"
              alt="Sunset Icon"
              width={40}
              height={40}
              className={styles.imgColor}
            />
            {weatherData && (
              <p>
                Sunset
                <br />
                {formatLocalTime(
                  weatherData.city.sunset,
                  weatherData.city.timezone
                )}
              </p>
            )}
          </div>
        </div>
      </div>
        <div className={styles.sunrise}>
      {weatherData && (
        <Image
          src={getWeatherIcon(weatherData.list[0].weather[0].main)}
          alt="Weather Icon"
          width={200}
          height={200}
        />
      )}
      {/* <p className={styles.sunny}>Sunny</p> */}
      {weatherData && (
        <p className={styles.sunny}>{weatherData.list[0].weather[0].main}</p>
      )}
    </div>
      
      {weatherData && (
        <div className={styles.weatherContainer}>
          <div className={styles.weatherGrid}>
            <div className={styles.weatherInfo}>
              <Image
                src="/humidity 1.png"
                alt="Humidity Icon"
                width={40}
                height={40}
                className={styles.imgColor}
              />
              <p>
                {weatherData.list[0].main.humidity}&nbsp;%
                <br />
                Humidity{" "}
              </p>
            </div>

            <div className={styles.weatherInfo}>
              <Image
                src="/pressure-white 1.png"
                alt="Pressure Icon"
                width={40}
                height={40}
                className={styles.imgColor}
              />
              <p>
                {weatherData.list[0].main.pressure}&nbsp;hpa
                <br />
                Pressure
              </p>
            </div>
          </div>
          <div className={styles.weatherGrid}>
            <div className={styles.weatherInfo}>
              <Image
                src="/wind 1.png"
                alt="Wind Icon"
                width={40}
                height={40}
                className={styles.imgColor}
              />
              <p>
                {weatherData.list[0].wind.speed.toFixed(0)}&nbsp;km/h
                <br />
                Wind Speed{" "}
              </p>
            </div>
            <div className={styles.weatherInfo}>
              <Image
                src="/uv-white 1.png"
                alt="UV Icon"
                width={40}
                height={40}
                className={styles.imgColor}
              />
              <p>
                {" "}
                8 <br /> UV
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentWeather;
