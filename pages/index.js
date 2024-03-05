import React, { useState } from "react";

import Image from "next/image";
import Header from "@/components/Header";
import TimeDate from "@/components/TimeDate";
import CurrentWeather from "@/components/CurrentWeather";
import FiveDayForecast from "@/components/FiveDayForecast";
import HourlyForecast from "@/components/HourlyForecast";


const Index = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null); // State for holding error message

  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=8840188cca6c3bf4c8f92e5bbdc53a04`
      );
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        setError(null); // Clear error if data is fetched successfully
      } else {
        const errorMessage = await response.text();
        setError(errorMessage); // Set error message if city is not found
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleSearch = (city) => {
    fetchWeatherData(city);
  };

  return (
    
    <div>
      <Header onSearch={handleSearch} weatherData={weatherData} />
      {error && ( // Render error message if error state is not null
        <div className="flex justify-center items-center flex-col mt-12">
          <Image
            src="/error.png"
            alt="Sunrise Icon"
            width={40}
            height={40}
           
          />
          <h1 className="text-red-600 text-2xl text-center mt-5">
            {"Please type valid city name !"}
          </h1>
        </div>
      )}
      {!error &&
        weatherData && ( // Render weather components if no error and weatherData is available
          <>
            <div className="flex justify-center mb-9 gap-6">
              <TimeDate weatherData={weatherData} />
              <CurrentWeather weatherData={weatherData} />
            </div>
            <div className="flex justify-center gap-6">
              <FiveDayForecast weatherData={weatherData} />
              <HourlyForecast weatherData={weatherData} />
            </div>
          </>
        )}
    </div>
  );
};

export default Index;
