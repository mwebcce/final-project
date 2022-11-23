const heading = document.getElementsByTagName("h2")[0]
const icon = document.getElementById("icon");


let city = "Montreal"

fetch("https://api.openweathermap.org/data/2.5/weather?q=Montreal&units=metric&appid=566e5f53cd0824ac79ba4c9a13d3b2dd")
.then((data) => data.json())
.then((weather) => {
    console.log(weather);
    heading.textContent = "Weather in " + city + " is: " + Math.round(weather.main.temp) + " °C ";

icon.setAttribute(
    "src",
    "http://openweathermap.org/img/wn/" + weather.weather[0].icon + "@4x.png"
)

});