$(document).ready(function () {
    var api,
        lat,
        lon,
        cors = "https://cors-anywhere.herokuapp.com/",
        apiUrl = cors + "https://api.darksky.net/forecast/",
        apiKey = "d3cc56fb2235aa843fbb7cef4b0e43ed";

    function getWeather(res) {
        $.ajax({
            success: function(result) {
                $(".temperature").text(res.currently.temperature + " ℉");
                IconGen(res.currently.icon);
                console.log(res.currently.icon);
            }
        });
    }
    
    
    function IconGen(desc) {
        var desc = desc.toLowerCase();
        switch (desc) {
            case 'clouds', 'partly-cloudy-day':
                $(".icon").attr("src", "https://res.cloudinary.com/saavy1/image/upload/v1504708584/inverted-cloud_s8gyae.png");
                console.log("clouds");
                break;
            case 'haze':
                $(".icon").attr("src", "https://res.cloudinary.com/saavy1/image/upload/v1504708584/inverted-cloud_s8gyae.png");
                console.log("clouds");
                break;
            case 'clear', 'clear-day':
                $(".icon").attr("src", "https://res.cloudinary.com/saavy1/image/upload/v1504708511/inverted-sunny_yydp4s.gif");
                break;
            case 'rain':
                $(".icon").attr("src", "http://res.cloudinary.com/saavy1/image/upload/v1504707815/inverted-rain_kyigh0.gif");
                break;
            case 'thunderstorm':
                $(".icon").attr("src", "https://res.cloudinary.com/saavy1/image/upload/v1504708329/inverted-storm_shpwk5.gif");
                break;
            default:
                break;
        }
    }

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            api = apiUrl + apiKey + "/" + lat + "," + lon;
            $.getJSON(api, getWeather);
            window.setInterval(function() {
                $.getJSON(api, getWeather);
            }, 10000);
            IconGen();
        });
    }  
});

/* API EXAMPLE 
{
"latitude":40.211071499999996,
"longitude":-111.6599124,
"timezone":"America/Denver",
"currently":{
    "time":1504909666, "summary":"Drizzle",
    "icon":"rain",
    "nearestStormDistance":0,
    "precipIntensity":0.0038,
    "precipIntensityError":0.001,
    "precipProbability":0.91,
    "precipType":"rain",
    "temperature":82.43,
    "apparentTemperature":82.43,
    "dewPoint":50.01,
    "humidity":0.33,
    "pressure":1012.25,
    "windSpeed":4.41,
    "windGust":8.52,
    "windBearing":180,
    "cloudCover":0.32,
    "uvIndex":3,
    "visibility":8.16,
    "ozone":277.26
    },
    */