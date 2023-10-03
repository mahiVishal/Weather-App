var inputCityName = document.querySelector(".inputcityname");
var weathericon  = document.querySelector(".weather-icon");

function fetchweather(){
    var apikey ="ff15e021acebcc309069d25e631ea9b6";
    var location = inputCityName.value;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`
    fetch(url)
    .then(res=>res.json())
    .then((data)=>{
       
      console.log(data);
      console.log(data.name);
      document.querySelector(".temp").innerHTML = `${data.main.temp}℃`;
      document.querySelector(".cityname").innerHTML = data.name;
      document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
      document.querySelector(".wind").innerHTML = `${data.wind.speed}km/hr`;
      if(data.weather[0].main == "Haze"){
        weathericon.src = "/weather-app-img/images/fog.png"
      }
      else if(data.weather[0].main == "Clouds"){
        weathericon.src = "/weather-app-img/images/clouds.png"

      }
      else if(data.weather[0].main == "Clear"){
        weathericon.src = "/weather-app-img/images/clear.png"

      }
      else if(data.weather[0].main == "Snow"){
        weathericon.src = "/weather-app-img/images/snow.png"

      }
      else if(data.weather[0].main == "Rain"){
        weathericon.src = "/weather-app-img/images/rain.png"

      }
      else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "/weather-app-img/images/drizzle.png"

      }
      else if(data.weather[0].main == "Fog"){
        weathericon.src = "/weather-app-img/images/fog.png"

      }




        
    })
    .catch((error)=>{
        console.log(error)
    })
    }