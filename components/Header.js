import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const Header = ({ onSearch, weatherData }) => {
  const [city, setCity] = useState("");

  useEffect(() => {
    const defaultCity = "Karachi";
    setCity(defaultCity);
    onSearch(defaultCity);
  }, []);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherDataByCoordinates(latitude, longitude);
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const fetchWeatherDataByCoordinates = async (lat, lon) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=8840188cca6c3bf4c8f92e5bbdc53a04`);
      const data = await response.json();
      onSearch(data.city.name);
      setCity(data.city.name);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className="flex justify-center gap-16 pb-4 p-2 flex-wrap">
        <div className="relative">
          <input
            type="text"
            value={city}
            placeholder="Search for your preferred city.."
            onChange={handleChange}
            className="w-[20rem] sm:w-[30rem] pl-12 py-2 bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white" />
        </div>
        {weatherData && (
          <button type="button" onClick={handleGetCurrentLocation} className="flex items-center px-4 py-2 font-bold text-white bg-gray-800 rounded-full hover:bg-black hover:text-white">
            <Image
              src="/location icon.png"
              alt="Location Icon"
              width={20}
              height={20}
              className="mr-2"
            />
            Current Location
          </button>
        )}
      </form>
    </header>
  );
};

export default Header;
