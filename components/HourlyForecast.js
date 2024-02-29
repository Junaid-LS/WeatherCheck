// import React from "react";
// import Image from "next/image";
// import classes from "./HourlyForecast.module.css";

// const HourlyForecast = ({ weatherData }) => {
//   return (
//     <div className={classes.watch}>
//       <h4 className={classes.hourlyPara}>Hourly Forecast:</h4>
//       <div className={classes.HourlyForecast}>
//         {weatherData && (
//           <div className={classes.HourlyForecastItem}>
//             <h4>{weatherData.list[0].dt_txt.slice(11, 16)}</h4>
//             <Image
//               src="/clear 3.png"
//               alt="sunny weather icon"
//               width={40}
//               height={40}
//               className={classes.imgColor}
//             />
//             <br />
//             <span className={classes.tempPara}>
//               {weatherData.list[0].main.temp.toFixed(0) - 273}&deg;C
//             </span>
//             <br />
//             <Image
//               src="/navigation 1(1).png"
//               alt="Wind Icon"
//               width={40}
//               height={40}
//               className={classes.imgColor}
//             />
//             <br />
//             <span>{weatherData.list[0].wind.speed.toFixed(0)}km/h</span>
//           </div>
//         )}
//         {weatherData && (
//           <div className={classes.HourlyForecastItem}>
//             <h4>{weatherData.list[1].dt_txt.slice(11, 16)}</h4>
//             <Image
//               src="/clear 3.png"
//               alt="sunny weather icon"
//               width={40}
//               height={40}
//               className={classes.imgColor}
//             />
//             <br />
//             <span className={classes.tempPara}>
//               {weatherData.list[1].main.temp.toFixed(0) - 273}&deg;C
//             </span>
//             <br />
//             <Image
//               src="/navigation 1(4).png"
//               alt="Wind Icon"
//               width={40}
//               height={40}
//               className={classes.imgColor}
//             />
//             <br />
//             <span>{weatherData.list[1].wind.speed.toFixed(0)}km/h</span>
//           </div>
//         )}
//         {weatherData && (
//           <div className={classes.HourlyForecastItem}>
//             <h4>{weatherData.list[2].dt_txt.slice(11, 16)}</h4>
//             <Image
//               src="/clouds 1.png"
//               alt="sunny weather icon"
//               width={40}
//               height={40}
//               className={classes.imgColor}
//             />
//             <br />
//             <span className={classes.tempPara}>
//               {weatherData.list[2].main.temp.toFixed(0) - 273}&deg;C
//             </span>
//             <br />
//             <Image
//               src="/navigation 1(1).png"
//               alt="Wind Icon"
//               width={40}
//               height={40}
//               className={classes.imgColor}
//             />
//             <br />
//             <span>{weatherData.list[2].wind.speed.toFixed(0)}km/h</span>
//           </div>
//         )}
//         {weatherData && (
//           <div className={classes.HourlyForecastItem}>
//             <h4>{weatherData.list[3].dt_txt.slice(11, 16)}</h4>
//             <Image
//               src="/drizzle 1.png"
//               alt="sunny weather icon"
//               width={40}
//               height={40}
//               className={classes.imgColor}
//             />
//             <br />
//             <span className={classes.tempPara}>
//               {weatherData.list[3].main.temp.toFixed(0) - 273}&deg;C
//             </span>
//             <br />
//             <Image
//               src="/navigation 1(2).png"
//               alt="Wind Icon"
//               width={40}
//               height={40}
//               className={classes.imgColor}
//             />
//             <br />
//             <span>{weatherData.list[3].wind.speed.toFixed(0)}km/h</span>
//           </div>
//         )}
//         {weatherData && (
//           <div className={classes.HourlyForecastItem}>
//             <h4>{weatherData.list[5].dt_txt.slice(11, 16)}</h4>
//             <Image
//               src="/mist 1.png"
//               alt="sunny weather icon"
//               width={40}
//               height={40}
//               className={classes.imgColor}
//             />
//             <br />
//             <span className={classes.tempPara}>
//               {weatherData.list[5].main.temp.toFixed(0) - 273}&deg;C
//             </span>
//             <br />
//             <Image
//               src="/navigation 1(1).png"
//               alt="Wind Icon"
//               width={40}
//               height={40}
//               className={classes.imgColor}
//             />
//             <br />
//             <span>{weatherData.list[5].wind.speed.toFixed(0)}km/h</span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default HourlyForecast;

import React from "react";
import Image from "next/image";
import classes from "./HourlyForecast.module.css";

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
        return "/snow 1.png";
      default:
        return "/clear 3.png"; // Default to a sunny icon
    }
  };

  return (
    <div className={classes.watch}>
      <h4 className={classes.hourlyPara}>Hourly Forecast:</h4>
      <div className={classes.HourlyForecast}>
        {weatherData && weatherData.list.slice(0,5).map((item, index) => (
          <div className={classes.HourlyForecastItem} key={index}>
            <h4>{item.dt_txt.slice(11, 16)}</h4>
            <Image
              src={getWeatherIcon(item.weather[0].main)}
              alt={item.weather[0].description}
              width={40}
              height={40}
              className={classes.imgColor}
            />
            <br />
            <span className={classes.tempPara}>
              {(item.main.temp - 273).toFixed(0)}&deg;C
            </span>
            <br />
            <Image
              src={`/navigation 1(${index % 3 + 1}).png`}
              alt="Wind Icon"
              width={40}
              height={40}
              className={classes.imgColor}
            />
            <br />
            <span>{item.wind.speed.toFixed(0)}km/h</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
