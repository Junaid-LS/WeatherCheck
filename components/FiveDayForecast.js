import React from "react";
import Image from "next/image";

const FiveDayForecast = ({ weatherData }) => {
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

  const formatLocalDate = (timestamp, timezone) => {
    const unixTime = timestamp * 1000;
    const offset = timezone * 1000;
    const localDate = new Date(unixTime + offset);
    return localDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="text-center rounded-2xl shadow-custom px-6">
      <p className="font-bold text-lg py-2">5 Days Forecast:</p>
      <div className="flex flex-col justify-center flex-wrap sm:text-center">
        {weatherData &&
          weatherData.list.map((item, index) => {
            if (index % 8 !== 0) return null;
            return (
              <div className="flex gap-4" key={index}>
                <Image
                  src={getWeatherIcon(item.weather[0].main)}
                  alt="Weather Icon"
                  width={30}
                  height={30}
                />
                  <p>{(item.main.temp - 273).toFixed(0)}&deg;C</p>
                  <p>{formatLocalDate(item.dt, weatherData.city.timezone)}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FiveDayForecast;
