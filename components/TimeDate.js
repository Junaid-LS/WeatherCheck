import React from "react";

const WeatherInfo = ({ weatherData }) => {
  const formatLocalTime = (timestamp, timezone) => {
    // Convert UNIX timestamp to milliseconds
    const unixTime = timestamp * 1000;
    // Get the timezone offset in milliseconds
    const offset = timezone * 1000;
    // Create a new Date object adjusted with the timezone offset
    const localDate = new Date(unixTime + offset);

    // Check if localDate is a valid Date object
    if (isNaN(localDate)) {
      return "Date is not valid";
    }

    const formattedTime = localDate.toLocaleTimeString("en-US", {
      timeZone: "UTC",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    console.log(formatLocalTime);
    return formattedTime;
  }

  const formatLocalDate = (timestamp, timezone) => {
    // Convert UNIX timestamp to milliseconds
    const unixTime = timestamp * 1000;
    // Get the timezone offset in milliseconds
    const offset = timezone * 1000;
    // Create a new Date object adjusted with the timezone offset
    const localDate = new Date(unixTime + offset);
    // Format the local date
    const formattedDate = localDate.toLocaleDateString("en-US", {
      timeZone: "UTC",
      weekday: "long",
      month: "short",
      day: "numeric",
    });
    return formattedDate;
  };

  return (
    <div className="text-center shadow-custom rounded-xl px-6">
      {weatherData && (
        <div>
          <p className="pt-10 text-xl font-bold">{weatherData.city.name}</p>
          <p className="text-5xl font-bold pt-8 mx-auto">
            {formatLocalTime(weatherData.list[0].dt, weatherData.city.timezone)}
          </p>
          <h5 className="text-sm font-thin">
            {formatLocalDate(weatherData.list[0].dt, weatherData.city.timezone)}
          </h5>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
