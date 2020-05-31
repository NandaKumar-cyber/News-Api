async function getplaces() {
    var input = document.getElementById("input");
    await new google.maps.places.Autocomplete(input);
}

let form = document.querySelector("form");

form.addEventListener("submit",(e) => {
    e.preventDefault();
    let searchKey =document.getElementById("input").value;
    console.log(searchKey);
    searchWeather(searchKey);
});

function searchWeather(searchKey){
let WeatherApi =`http://api.openweathermap.org/data/2.5/weather?q={searchKey}&appid=febfbe47376e3acdd47086036f5d2eaf`;
window
.fetch(WeatherApi)
.then((data) =>{
data
.json()
.then((weather)=>{
    console.log(weather);
    let weatherData = weather.weather;
    let main = weather.main;
    output = [];
    for (let x of weatherData){
        output +=`
        <div class="col-md12 mt-4 card">
        <div class="card-body">
        <h1>${weather.name}</h1>
        <div>
        <p class ="icon">
        <img src ="http://openWeather.org/img/wn/${x.icon}.png" /></p>
        <p><span>temp:</span>
        <span class="temp">${weather.main.temp}&deg;c</span></p>

        <p class="float-left">humidity : ${weather.main.humdidty}&deg;c</p>
        <p class="des float-left">${x.description}</p>
        <p class="des float-right">${x.main}</p></div>

        <div>
        <div>
        `;
        document.getElementById("weathertemplate").innerHTML=output;
    }
})
.catch((err) => console.log(err));
})
.catch((err) => console.log(err));
}


// async function getPlaces() {
//     var input = document.getElementById("input");
//     await new google.maps.places.Autocomplete(input);
// }

// let form = document.getElementById("form");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let searchKey = document.getElementById("input").value;
//     alert(searchKey);
//     // console.log(searchKey);
//     searchWeather(searchKey);
// });


// function searchWeather(searchKey) {
//     let weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${searchKey}&appid=6c5f307e50884bab4510b7a3ccb9808a`;
//     window.fetch(weatherApi)
//       .then((data) => {
//           data.json()
//           .then((weather1) => {
//             //    console.log(weather);
//                let weatherData = weather1.weather;
//                let main = weather1.main;
//                output = [];
//                for(let x of weatherData) {
//                    output += `
//                    <div class="col-md-12 mt-4 card">
//                        <div class="card-body">
//                         <h1>${weather1.name}</h1>
//                         <div>
//                             <p class="icon">
//                             <img src="http://openweathermap.org/img/wn/${x.icon}.png" alt="" /></p>
//                             <p><span>Temp:</span>
//                             <span class="temp">${weather1.main.temp-273.15}&deg;c</span></p>
//                             <p class="float-left">Humidity: ${weather1.main.humidity}&deg;c</p>
//                             <p class="des float-left">${x.description}</p>
//                             <p class="des float-right">${x.main}</p>
//                         </div>
//                        </div>
//                    </div>
//                    `;
//                    document.getElementById("weatherTemplate").innerHTML = output;
//                }
//           })
//           .catch((err) => console.log(err));
//       })
//       .catch((err) => console.log(err));
// }




//         function myFunction() {
//             // alert(1);
//             var weather = $("#weather").val();
//             // alert(weather);

//     searchWeather(weather);

//    }

  
// function searchWeather(searchKey) {
//     // alert(1);
//     let weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${searchKey}&appid=febfbe47376e3acdd47086036f5d2eaf`;
//     window.fetch(weatherApi)
//       .then((data) => {
//           data
//           .json()
//           .then((weather1) => {
//                console.log(weather);
//                let weatherData = weather.weather;
//                let main = weather.main;
//                output = [];
//                for(let x of weatherData) {
//                    output += `
//                    <div class="col-md-12 mt-4 card">
//                        <div class="card-body">
//                         <h1>${weather.name}</h1>
//                         <div>
//                             <p class="icon">
//                             <img src="http://openweathermap.org/img/wn/${x.icon}.png" alt="" /></p>
//                             <p><span>temp:</span>
//                             <span class="temp">${weather.main.temp}&deg;c</span></p>
//                             <p class="float-left">Humidity: ${weather.main.humidity}&deg;c</p>
//                             <p class="des float-left"> &nbsp${x.description}</p>
//                             <p class="des float-right">${x.main}</p>
//                         </div>
//                        </div>
//                    </div>
//                    `;
//                    document.getElementById("weatherTemplate").innerHTML = output;
//                }
//           })
//           .catch((err) => console.log(err));
//       })
//       .catch((err) => console.log(err));
// }
     