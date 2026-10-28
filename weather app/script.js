
//open weather api key
const apiKey="a180b8c801ccfa47e5a6c1f26f8e16da"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox=document.querySelector('.search input')
let searchBtn=document.querySelector('.search button')
let weatherIcon=document.querySelector('.weather-icon')


async function getWeather(city){
   
    const response=  await fetch(apiUrl+city+`&appid=${apiKey}`);

    if(response.status == 404){
      document.querySelector(".error").style.display = "block"
      document.querySelector('.weather').style.display = "none"
    }
   else{
      let data= await response.json();

      console.log(data);
      
      document.querySelector('.temp').innerHTML= Math.round(data.main.temp)+'°C'
      document.querySelector('.city').innerHTML= data.name
      document.querySelector('.humidity').innerHTML= data.main.humidity +'%'
      document.querySelector('.wind').innerHTML= data.wind.speed +"km/h"
  
     if(data.weather[0].main == "clouds")
       {
        weatherIcon.src = "./weatherImage/images/clouds.png";
       }
       else if(data.weather[0].main == "clear")
       {
       weatherIcon.src = "./weatherImage/images/clear.png";
       }
       else if(data.weather[0].main == "clear")
       {
       weatherIcon.src = "./weatherImage/images/clear.png";
       }
       else if(data.weather[0].main == "drizzle")
       {
       weatherIcon.src = "./weatherImage/images/drizzle.png";
       }
       else if(data.weather[0].main == "mist")
       {
       weatherIcon.src = "./weatherImage/images/mist.png";
       }
       else if(data.weather[0].main == "rain")
       {
       weatherIcon.src = "./weatherImage/images/rain.png";
       }
       else if(data.weather[0].main == "snow")
       {
       weatherIcon.src = "./weatherImage/images/snow.png";
       }
     document.querySelector('.weather').style.display = "block"
     document.querySelector(".error").style.display = "none"
   }
          
   }
  

searchBtn.addEventListener("click",()=>{
   
   getWeather(searchBox.value);
})

