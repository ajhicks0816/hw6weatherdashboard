// //Variables
// var citySearch = document.getElementById("search-button")

// //List of city searched goes here
// var cities = ["Chicago", "Atlanta", "Los Angeles", "Houston", "Orlando", "Seattle", "Denver", "New York"];
// var ul = document.createElement("ul");
// document.getElementById("citylist").appendChild(ul);

// names.forEach(function (name) {
//   var li = document.createElement('li');
//   ul.appendChild(li);
//   li.innerHTML += name;
// });

// //Local storage for cities
// localStorage.setItem("");

//City, Temp, Humidity, Wind speed & UV index go here
function currentWeather () {
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid" + cityName + apiKey;
    method: "GET"
  }).then(function (response){

    console.log(response)
  })

//5-day forecast for city requested
// var weatherBoxes


// apiKey = "api.openweather.org/data/2.5/forecast?id=524901&appid=f05e3532564af745366f28fa6c91999b";
// calling API

function getWeather(cityName) {
  dataType: JSON
}

var queryURL ="http://api.openweathermap.org/data/2.5/forecast?id=524901&appid" + cityName + APIKey;

$.ajax({
  url: queryURL,
  method: "GET"

})
.then(function(response) {

  console.log(response)
  
})

document.getElementById("search-button").addEventListener("click", displayWeather);
function displayWeather() {
  // document.getElementById("").innerHTML = Weather();
  console.log("clicked!!")

};

// // }).then(function (response) {
//   var "" = JSON.parse(localStorage.getItem(""));
  
//   if ("" === null) {
//     "" = [];
//   }
// "".push(city);

// localStorage.setItem("", JSON.stringify(""));

// console.log(response);
// }
// // });

//Click event
// citySearch.addEventListener("click",function() {
//   searchHistory = [];
//   renderSearchHistory ();
