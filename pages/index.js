// import React, { useState, useEffect } from 'react';
// import Header from "@/components/Header";
// import TimeDate from "@/components/TimeDate";
// import CurrentWeather from "@/components/CurrentWeather";
// import FiveDayForecast from "@/components/FiveDayForecast";
// import HourlyForecast from "@/components/HourlyForecast";
// import classes from "./page.module.css";

// const Index = () => {
//     const [weatherData, setWeatherData] = useState(null);

//     const fetchWeatherData = async (city) => {
//         try {
//             const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=8840188cca6c3bf4c8f92e5bbdc53a04`);
//             const data = await response.json();
//             setWeatherData(data);
//         } catch (error) {
//             console.error('Error fetching weather data:', error);
//         }
//     };

//     const handleSearch = (city) => {
//         fetchWeatherData(city);
//     };

//     return (
//       <div className={classes.mainContainer}>
//           <Header onSearch={handleSearch}  weatherData={weatherData} />
//           <div className={classes.watch}>
//             <TimeDate  weatherData={weatherData} />
//             <CurrentWeather  weatherData={weatherData} />
//           </div>
//           <div className={classes.watch}>
//             <FiveDayForecast  weatherData={weatherData}/>
//             <HourlyForecast  weatherData={weatherData} />
//           </div>
//       </div>
//     );
//   };
  
//   export default Index;

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from "@/components/Header";
import TimeDate from "@/components/TimeDate";
import CurrentWeather from "@/components/CurrentWeather";
import FiveDayForecast from "@/components/FiveDayForecast";
import HourlyForecast from "@/components/HourlyForecast";
import classes from "./page.module.css";

const Index = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null); // State for holding error message

    const fetchWeatherData = async (city) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=8840188cca6c3bf4c8f92e5bbdc53a04`);
            if (response.ok) {
                const data = await response.json();
                setWeatherData(data);
                setError(null); // Clear error if data is fetched successfully
            } else {
                const errorMessage = await response.text();
                setError(errorMessage); // Set error message if city is not found
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const handleSearch = (city) => {
        fetchWeatherData(city);
    };

    return (
      <div className={classes.mainContainer}>
          <Header onSearch={handleSearch}  weatherData={weatherData} />
          {error && ( // Render error message if error state is not null
              <div className={classes.errorContainer}>
                  {/* {error} */}
                  <Image
              src="/error.png"
              alt="Sunrise Icon"
              width={40}
              height={40}
              // className={styles.imgColor}
            />
                  <h1 className={classes.errorMessage}>{"Please type valid city name !"}</h1>
              </div>
          )}
          {!error && weatherData && ( // Render weather components if no error and weatherData is available
              <>
                  <div className={classes.watch}>
                      <TimeDate  weatherData={weatherData} />
                      <CurrentWeather  weatherData={weatherData} />
                  </div>
                  <div className={classes.watch}>
                      <FiveDayForecast  weatherData={weatherData}/>
                      <HourlyForecast  weatherData={weatherData} />
                  </div>
              </>
          )}
      </div>
    );
  };
  
  export default Index;

