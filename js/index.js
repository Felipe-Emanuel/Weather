import weatherApi from './weatherApi.js'

const btnHideForecast = document.querySelector('#hideForecast')
const btnShowForecast = document.querySelector('#showForecast')
const btnHideSliderWeather = document.querySelector('#hideSliderWeather')
const btnShowSliderWeather = document.querySelector('#showSliderWeather')
const forecast = document.querySelector('.forecastOfDays')
const wheather = document.querySelector('.wheather')
const wheatherRight = document.querySelector('.wheatherRight')
const footerText = document.querySelector('.footerText')

// TOOLTIP FUNCTION
// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl)
// });


// THIS WILL WORK WITH BUTTONS SIDE BY "PREVISÃO DE 5 DIAS"
btnHideForecast.addEventListener("click", () => {
    btnShowForecast.style.display = "inline-block"
    btnHideForecast.style.display = "none"
    footerText.style.display = "none"

    forecast.animate ([
        {transform: 'scale(.8)'},
        {transform: 'scale(.5)'},
        {transform: 'scale(.2)'},
        {transform: 'scale(0)'}
    ], {duration: 500})
    setTimeout(() => {
        forecast.style.display = "none"
    }, 500)
});

btnShowForecast.addEventListener("click", () => {
    btnHideForecast.style.display = "inline-block"
    btnShowForecast.style.display = "none"
    forecast.style.display = "block"
    footerText.style.display = "block"
    forecast.animate ([
        {transform: 'scale(0)'},
        {transform: 'scale(.2)'},
        {transform: 'scale(.5)'},
        {transform: 'scale(.8)'}
    ], {duration: 500})
});

// MAIN WEATHER HEADER SYMBOL ANIMATION
const mainWeatherTop = document.querySelector('.mainWeatherTop')
const mainWeatherTopSymbol = document.querySelector('.mainWeatherSymbol')
mainWeatherTop.addEventListener("mouseout", () => {
        mainWeatherTopSymbol.style.transition = '2s'
        mainWeatherTopSymbol.style.transform = 'translateX(-50%)'
        setTimeout(()=>{
            mainWeatherTopSymbol.style.transform = 'translateX(-0%)'  
        }, 1900)
});

// WORKING WITH SIDE BUTTON TO SHOW OR HIDE WEATHER RIGHTS SIDE

btnShowSliderWeather.addEventListener("click", () => {
    btnShowSliderWeather.style.display ="none"
    btnHideSliderWeather.style.display = "block"
    wheatherRight.style.display = "block"
    wheather.style.width = '55%'  
    mainWeatherTop.style.borderRadius = '15px 0px 15px 0px' 
})

btnHideSliderWeather.addEventListener("click", () => {
    btnHideSliderWeather.style.display = "none"
    btnShowSliderWeather.style.display = "block"
    wheatherRight.style.display = "none"
    wheather.style.width = '40%'  
    mainWeatherTop.style.borderRadius = '15px 15px 0px 0px' 
});


// SEARCH CITY
function openWeater(){
    wheatherMiddle.style.display = "flex"
    btnHideForecast.style.display = "inline-block"
    btnHideForecast.style.display = "none"
    wheatherFooter.style.display = "block"
    wheatherSliderImg.style.display = "block"
    tempSymbol.style.display = "block"
}

function APIImport() {
    weatherApi.showWeatherData()
    weatherApi.weatherAPIData()
    weatherApi.weatherAPI()
}


const btnEditCity = document.querySelector('#editCity')
const searchCity = document.querySelector('.searchCity')

var wheatherMiddle = document.querySelector('.wheatherMiddle')
var wheatherFooter = document.querySelector('.wheatherFooter')
var wheatherSliderImg = document.querySelector('.wheatherSliderImg')

btnEditCity.addEventListener("click", () => {
    searchCity.classList.add('hide')
    openWeater()

    if(searchCity.style.display === 'none') {
        searchCity.style.display = 'block';

    } else {
        searchCity.style.display = 'none'
        APIImport()
    }

});

searchCity.addEventListener("keyup", (e) => {
    
    if (e.code === "Enter"){
        const search = e.target.value
        APIImport(search)
        openWeater()
        };
    }   
);

// CELSIUS AND FAHRENHEIT
const btnWeatherConfigC = document.querySelector('.btnWeatherConfig.C')
const btnWeatherConfigF = document.querySelector('.btnWeatherConfig.F')
var temp = document.querySelectorAll('.temp')
let tempSymbol = document.getElementById('tempSymbol')

function fahrenheit () {
   temp.forEach(temp => {
    temp.innerHTML = Math.floor(temp.innerHTML * 1.8) + 32
   });
   tempSymbol.textContent = `°f`
}

function celsius () {
    temp.forEach(temp => {
    temp.innerHTML = Math.floor((temp.innerHTML -32) / 1.8)
    });
    tempSymbol.textContent = `°c`
}

function celsiusToFahrenheit(btn) {
    btn.animate ([
        {transform: 'scale(0)'},
        {transform: 'scale(.2)'},
        {transform: 'scale(.5)'},
        {transform: 'scale(.8)'}
    ], {duration: 150})
}

btnWeatherConfigC.addEventListener("click", () => {
    btnWeatherConfigC.style.display = "none"
    btnWeatherConfigF.style.display = "block"
    celsiusToFahrenheit(btnWeatherConfigF)
    fahrenheit()
})

btnWeatherConfigF.addEventListener("click", () => {
    btnWeatherConfigF.style.display = "none"
    btnWeatherConfigC.style.display = "block"
    celsiusToFahrenheit(btnWeatherConfigC)
    celsius()
    }
)