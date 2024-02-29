// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import classes from "./FiveDayForecast.module.css";

// const FiveDayForecast = ({ weatherData }) => {
//   const formatLocalDate = (timestamp, timezone) => {
//     // Convert UNIX timestamp to milliseconds
//     const unixTime = timestamp * 1000;
//     // Get the timezone offset in milliseconds
//     const offset = timezone * 1000;
//     // Create a new Date object adjusted with the timezone offset
//     const localDate = new Date(unixTime + offset);
//     // Format the local date
//     const formattedDate = localDate.toLocaleDateString("en-US", {
//       timeZone: "UTC",
//       weekday: "long",
//       month: "short",
//       day: "numeric",
//     });
//     return formattedDate;
//   };
//   console.log(FiveDayForecast);
//   return (
//     <div className={classes.watch}>
//       <p className={classes.fiveInfoPara}>5 Days Forecast:</p>
//       <div className={classes.fiveInfo}>
//         <div className={classes.dailyForecast}>
//           <Image
//             src="/clouds 1.png"
//             alt="Weather Icon"
//             width={30}
//             height={30}
//             className={classes.icon}
//           />
//           {weatherData && (
//             <div className={classes.fiveDayInfo}>
//               <p>{weatherData.list[3].main.temp.toFixed(0) - 273}&deg;C</p>
//               <p>
//                 {formatLocalDate(
//                   weatherData.list[3].dt,
//                   weatherData.city.timezone
//                 )}
//               </p>
//             </div>
//           )}
//         </div>
//         <div className={classes.dailyForecast}>
//           <Image
//             src="/clouds 1.png"
//             alt="Weather Icon"
//             width={30}
//             height={30}
//             className={classes.icon}
//           />
//           {weatherData && (
//             <div className={classes.fiveDayInfo}>
//               <p>{weatherData.list[10].main.temp.toFixed(0) - 273}&deg;C</p>
//               <p>
//                 {formatLocalDate(
//                   weatherData.list[15].dt,
//                   weatherData.city.timezone
//                 )}
//               </p>
//             </div>
//           )}
//         </div>
//         <div className={classes.dailyForecast}>
//           <Image
//             src="/clouds 1.png"
//             alt="Weather Icon"
//             width={30}
//             height={30}
//             className={classes.icon}
//           />
//           {weatherData && (
//             <div className={classes.fiveDayInfo}>
//               <p>{weatherData.list[19].main.temp.toFixed(0) - 273}&deg;C</p>
//               <p>
//                 {formatLocalDate(
//                   weatherData.list[19].dt,
//                   weatherData.city.timezone
//                 )}
//               </p>
//             </div>
//           )}
//         </div>
//         <div className={classes.dailyForecast}>
//           <Image
//             src="/clouds 1.png"
//             alt="Weather Icon"
//             width={30}
//             height={30}
//             className={classes.icon}
//           />
//           {weatherData && (
//             <div className={classes.fiveDayInfo}>
//               <p>{weatherData.list[36].main.temp.toFixed(0) - 273}&deg;C</p>
//               <p>
//                 {formatLocalDate(
//                   weatherData.list[30].dt,
//                   weatherData.city.timezone
//                 )}
//               </p>
//             </div>
//           )}
//         </div>
//         <div className={classes.dailyForecast}>
//           <Image
//             src="/clouds 1.png"
//             alt="Weather Icon"
//             width={30}
//             height={30}
//             className={classes.icon}
//           />
//           {weatherData && (
//             <div className={classes.fiveDayInfo}>
//               <p>{weatherData.list[35].main.temp.toFixed(0) - 273}&deg;C</p>
//               <p>
//                 {formatLocalDate(
//                   weatherData.list[39].dt,
//                   weatherData.city.timezone
//                 )}
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FiveDayForecast;

// import React from "react";
// import Image from "next/image";
// import classes from "./FiveDayForecast.module.css";

// const FiveDayForecast = ({ weatherData }) => {
//   const getWeatherIcon = (weatherCondition) => {
//     switch (weatherCondition) {
//       case "Clear":
//         return "/clear 3.png";
//       case "Clouds":
//         return "/clouds 1.png";
//       case "Rain":
//         return "/drizzle 1.png";
//       case "Snow":
//         return "/snow 1.png";
//       default:
//         return "/clear 3.png"; // Default to a sunny icon
//     }
//   };

//   const formatLocalDate = (timestamp, timezone) => {
//     const unixTime = timestamp * 1000;
//     const offset = timezone * 1000;
//     const localDate = new Date(unixTime + offset);
//     const formattedDate = localDate.toLocaleDateString("en-US", {
//       timeZone: "UTC",
//       weekday: "long",
//       month: "short",
//       day: "numeric",
//     });
//     return formattedDate;
//   };

//   return (
//     <div className={classes.watch}>
//       <p className={classes.fiveInfoPara}>5 Days Forecast:</p>
//       <div className={classes.fiveInfo}>
//         {weatherData &&
//           weatherData.list.slice(0,5).map((item, index) => (
//             <div className={classes.dailyForecast} key={index}>
//               <Image
//                 src={getWeatherIcon(item.weather[0].main)}
//                 alt="Weather Icon"
//                 width={30}
//                 height={30}
//                 className={classes.icon}
//               />
//               <div className={classes.fiveDayInfo}>
//                 <p>{(item.main.temp - 273).toFixed(0)}&deg;C</p>
//                 <p>
//                   {formatLocalDate(item.dt, weatherData.city.timezone)}
//                 </p>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default FiveDayForecast;

import React from "react";
import Image from "next/image";
import classes from "./FiveDayForecast.module.css";

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
    <div className={classes.watch}>
      <p className={classes.fiveInfoPara}>5 Days Forecast:</p>
      <div className={classes.fiveInfo}>
        {weatherData &&
          weatherData.list.map((item, index) => {
            // Skip items that represent the same day
            if (index % 8 !== 0) return null;
            return (
              <div className={classes.dailyForecast} key={index}>
                <Image
                  src={getWeatherIcon(item.weather[0].main)}
                  alt="Weather Icon"
                  width={30}
                  height={30}
                  className={classes.icon}
                />
                <div className={classes.fiveDayInfo}>
                  <p>{(item.main.temp - 273).toFixed(0)}&deg;C</p>
                  <p>{formatLocalDate(item.dt, weatherData.city.timezone)}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FiveDayForecast;
