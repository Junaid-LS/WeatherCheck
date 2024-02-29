import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import styles from "./Header.module.css";

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
      <form onSubmit={handleSubmit} className={styles.headerContainer}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            value={city}
            placeholder="Search for your preferred city.."
            onChange={handleChange}
            className={styles.searchInput}
          />
          <FaSearch className={styles.searchIcon} />
        </div>
        {weatherData && (
          <button type="button" onClick={handleGetCurrentLocation} className={styles.btnLocation}>
            <Image
              src="/location icon.png"
              alt="Sunrise Icon"
              width={20}
              height={20}
              className={styles.imgLocation}
            />
            current Location
          </button>
        )}
      </form>
    </header>
  );
};

export default Header;
