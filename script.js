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
    
    function getCity(res) {
        $("#location").text(res.name);
    }
    
    function getIconType(res) {
        $("#sky").text(res.weather.main);
    }

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            api = apiUrl + lat + "&lon=" + lon + "&APPID=" + apiKey + "&units=" + units;
            $.getJSON(api, getWeather);
            $.getJSON(api, getCity);
            $.getJSON(api, getIconType);
            console.log(api);
        });
    }
});

/* API example for reference
{"coord":{"lon":-111.77,"lat":40.36},
"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],
"base":"stations",
"main":{"temp":70.34,"pressure":1020,"humidity":46,"temp_min":55.4,"temp_max":80.6},
"visibility":16093,
"wind":{"speed":4.7,"deg":130},
"clouds":{"all":1},
"dt":1503986160,
"sys":{"type":1,"id":2824,"message":0.0034,"country":"US","sunrise":1504011131,"sunset":1504058560},
"id":5779816,
"name":"Pleasant Grove",
"cod":200}
*/
