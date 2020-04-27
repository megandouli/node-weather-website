const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=099dd48613644d75466b333b4f497bce&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const data =
        body.current.weather_descriptions[0] +
        ". It's currently " +
        body.current.temperature +
        " degrees out. It feels like " +
        body.current.feelslike +
        " degrees out. The wind speed is " +
        body.current.wind_speed +
        " mph.";
      callback(undefined, data);
    }
  });
};

module.exports = forecast;
