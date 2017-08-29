$(document).ready(function() {
  var api,
      lat,
      lon,
      apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=",
      apiKey = "5aee96d3327e32e4301548ed02bf8431",
      units = "imperial";

  function getWeather(res) {
    $(".temperature").text(res.main.temp + " ℉");
  }

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      api = apiUrl + lat + "&lon=" + lon + "&APPID=" + apiKey + "&units=" + units;
      $.getJSON(api, getWeather);
      console.log(api);
    });
  }
});