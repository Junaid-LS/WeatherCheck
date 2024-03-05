import React from "react";
import Image from "next/image";

const HourlyForecast = ({ weatherData }) => {
  const getWeatherIcon = (weatherCondition) => {
    switch (weatherCondition) {
      case "Clear":
        return "/clear 3.png";
      case "Clouds":
        return "/clouds 1.png";
      case "Rain":
        return "/drizzle 1.png";
      case "Snow":
        return "/snow.png";
      default:
        return "/clear 3.png";
    }
  };

  return (
    <div className="text-center rounded-xl shadow-custom px-6 p-3">
      <h4 className="font-bold pb-3">Hourly Forecast:</h4>
      <div className="flex justify-center gap-4 rounded-lg flex-wrap">
        {weatherData &&
          weatherData.list.slice(0, 5).map((item, index) => (
            <div className="bg-gray-800 p-2 px-6 rounded-lg" key={index}>
              <h4>{item.dt_txt.slice(11, 16)}</h4>
              <Image
                src={getWeatherIcon(item.weather[0].main)}
                alt={item.weather[0].description}
                width={40}
                height={40}
              />
              <br />
              <span className="font-bold text-white">
                {(item.main.temp - 273).toFixed(0)}&deg;C
              </span>
              <br />
              <Image
                src={`/navigation 1(${index % 3 + 1}).png`}
                alt="Wind Icon"
                width={40}
                height={40}
              />
              <br />
              <span className="text-white">{item.wind.speed.toFixed(0)}km/h</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
