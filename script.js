$(document).ready(function () {
    var api,
        lat,
        lon,
        apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=",
        apiKey = "5aee96d3327e32e4301548ed02bf8431",
        units = "imperial";

    function getWeather(res) {
        $.ajax({
            success: function(result) {
                $(".temperature").text(res.main.temp + " ℉");
                $(".icon-name").text(res.weather[0].main);
                IconGen(res.weather[0].main);
            }
        });
    }
    
    
    function IconGen(desc) {
        var desc = desc.toLowerCase();
        switch (desc) {
            case 'clouds':
                $(".icon").attr("src", "https://res.cloudinary.com/saavy1/image/upload/v1503986478/CLOUDY_e4vy1w.gif");
                console.log("clouds");
                break;
            case 'Clear':
                $(".icon").attr("src", "https://res.cloudinary.com/saavy1/image/upload/v1503986478/SUNNY_wxrape.gif");
                break;
            case 'rain':
                $(".icon").attr("src", "https://res.cloudinary.com/saavy1/image/upload/v1503986478/RAINY_spiakm.gif");
                break;
            default:
                break;
        }
    }
    
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            api = apiUrl + lat + "&lon=" + lon + "&APPID=" + apiKey + "&units=" + units;
            $.getJSON(api, getWeather);
            IconGen()
        });
    }
});

/*
{"coord": {
    "lon":-111.65,
    "lat":40.22
    },
"weather":[{
    "id":800,
    "main":"Clear",
    "description":"clear sky",
    "icon":"01d"
    }],
"base":"stations",
"main":{
    "temp":77.85,
    "pressure":1022,
    "humidity":37,
    "temp_min":68,
    "temp_max":86
    },
"visibility":16093,
"wind":{
    "speed":8.05,"deg":130
    },
"clouds":{
    "all":1
    },
"dt":1504025700,
"sys":{
    "type":1,
    "id":2828,
    "message":0.004,
    "country":"US",
    "sunrise":1504011137,
    "sunset":1504058480
    },
"id":5780026,
"name":"Provo",
"cod":200}
*/