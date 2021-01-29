//Variables
var citySearch = document.getElementById("search-button")

//List of city searched goes here
var cities = ["Chicago", "Atlanta", "Los Angeles", "Houston", "Orlando", "Seattle", "Denver", "New York"];
var ul = document.createElement("ul");
document.getElementById("citylist").appendChild(ul);

names.forEach(function (name) {
  var li = document.createElement('li');
  ul.appendChild(li);
  li.innerHTML += name;
});

//Local storage for cities
localStorage.setItem("");

//City, Temp, Humidity, Wind speed & UV index go here


//5-day forecast for city requested
// var weatherBoxes



//Ajax call function (API KEY = 524901&appid=f05e3532564af745366f28fa6c91999b)
// function getWeather(cityName) {
  // dataType: JSON

// }

// var getWeather


// var queryURL = http://api.openweathermap.org/data/2.5/forecast?id=" + cityName + "&appid=" + APIKey;

// console.log(queryURL)
// $.ajax({
//   url: queryURL,
//   method: "GET"
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
citySearch.addEventListener("click",function() {
  searchHistory = [];
  renderSearchHistory();
}

// }
