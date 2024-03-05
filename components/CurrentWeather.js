import React from "react";
import Image from "next/image";

const CurrentWeather = ({ weatherData }) => {
  const formatLocalTime = (timestamp, timezone) => {
    const unixTime = timestamp * 1000;
    const offset = timezone * 1000;
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
        return "/clear 3.png"; 
    }
  };

  // for classes 
  let classes = {
    main : "text-center flex items-center justify-center px-6 rounded-xl shadow-custom flex-col md:flex-row md:items-center md:gap-6",
  }
  return (
    <div className={classes.main}>
      {weatherData && (
        <div className="flex flex-row sm:flex-col">
          <div className="mb-4">
            <p className="text-3xl font-bold">{Math.round(weatherData.list[0].main.temp - 273.15)}°C</p>
            <p>Feels Like: <span className="font-bold">{Math.round(weatherData.list[0].main.feels_like - 273.15)}°C</span></p>
          </div>
          <div className=" flex flex-row sm:flex-col">
            <div className="flex mb-2">
              <Image src="/sunrise.png" alt="Sunrise Icon" width={40} height={40} />
              <p className="text-sm">Sunrise<br />{formatLocalTime(weatherData.city.sunrise, weatherData.city.timezone)}</p>
            </div>
            <div className="flex">
              <Image src="/sunset.png" alt="Sunset Icon" width={40} height={40} />
              <p className="text-sm">Sunset<br />{formatLocalTime(weatherData.city.sunset, weatherData.city.timezone)}</p>
            </div>
          </div>
        </div>
      )}
      {weatherData && (
        <div className="flex flex-col items-center">
          <Image src={getWeatherIcon(weatherData.list[0].weather[0].main)} alt="Weather Icon" width={200} height={200} />
          <p className="text-lg font-bold">{weatherData.list[0].weather[0].main}</p>
        </div>
      )}
      {weatherData && (
        <div className="flex flex-row sm:flex-col">
          <div className="flex gap-2">
            <div>
              <Image src="/humidity 1.png" alt="Humidity Icon" width={40} height={40} />
              <p>{weatherData.list[0].main.humidity}&nbsp;%<br />Humidity</p>
            </div>
            <div>
              <Image src="/pressure-white 1.png" alt="Pressure Icon" width={40} height={40} />
              <p>{weatherData.list[0].main.pressure}&nbsp;hpa<br />Pressure</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <Image src="/wind 1.png" alt="Wind Icon" width={40} height={40} />
              <p>{weatherData.list[0].wind.speed.toFixed(0)}&nbsp;km/h<br />Wind Speed</p>
            </div>
            <div>
              <Image src="/uv-white 1.png" alt="UV Icon" width={40} height={40} />
              <p>8<br />UV</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentWeather;
