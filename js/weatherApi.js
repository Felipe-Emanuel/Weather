import openWeatherKey from './APIsKeys.js'

const showAndHideSliderBtn = document.querySelector('.showAndHideSliderBtn')
const mainWeatherTop = document.querySelector('.mainWeatherTop')
var bodyBG = document.body.style.backgroundColor
var mainSymbol = document.querySelector('.mainSymbol')
var cityIdentificator = document.querySelector('.cityIdentificator')   
var mainWeatherCity = document.querySelector('.mainWeatherCity')  
var mainWeatherClimate = document.querySelector('.mainWeatherClimate')
var wheather = document.querySelector('.wheather')
var btnEditCity = document.getElementById('editCity')

function changeBG(color) {
    wheather.style.backgroundColor = color
    showAndHideSliderBtn.style.backgroundColor = color
    btnEditCity.style.backgroundColor = color
}

const openWeatherAPI = async (city) => {
    var city = document.getElementById('searchCity').value

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherKey}&lang=pt_br&units=metric`;

    const res = await fetch(apiURL)
    const data = await res.json()
    console.log(data)
    return data;
}

const showWeatherData = async (city) => {
    const data = await openWeatherAPI(city)
    var climate = `${data.weather[0].description}`
    var climateIcon = `${data.weather[0].icon}`

    // PROMISES
    const climatePromise = new Promise ((resolve) => {
        resolve = climate
        return resolve

    })
        climatePromise
        .catch(err => console.log(`climate error: ${err}`))

    const climateIconPromise = new Promise ((resolve) => {
        resolve = climateIcon
        return resolve
    })
        climateIconPromise
        .catch(err => console.log(`climateIcon error: ${err}`))
    
    try {
        mainSymbol.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        cityIdentificator.innerHTML = `${data.name}, ${data.sys.country}`
        mainWeatherCity.innerHTML = `${data.name}, ${data.sys.country}`
        mainWeatherClimate.innerHTML = `${data.weather[0].description}`

        if(climate === "encoberto"
            || climate === "nublado"){
 
                mainWeatherTop.style.backgroundImage = "url('../img/Cloudy1.png')"
                changeBG("#12324d")
                bodyBG ="#183857"

            } else if (climate === "algumas nuvens") {
 
                mainWeatherTop.style.backgroundImage = "url('../img/clearDay.png')"
                changeBG("#7bbadd")
                bodyBG ="#5fb2df"
            };
 
        if (climate === "poucas nuvens"
            || climate === "Neblina"
            || climate === "nuvens dispersas"){
 
                mainWeatherTop.style.backgroundImage = "url('../img/Cloudy2.png')"
                changeBG("#3f506e")
                bodyBG ="#344463"
            }

        if (climate === "céu limpo" && climateIcon === "01n") {
    
                mainWeatherTop.style.backgroundImage = "url('../img/ClearNight.png')"
                changeBG("#14253f")    
                bodyBG ="#12233b"

            } else if (climate === "céu limpo" && climateIcon === "01d") {

                mainWeatherTop.style.backgroundImage = "url('../img/Sunny.png')"
                changeBG("#234b89")
                bodyBG ="#1c4482"
            }
            
        if(climateIcon === "02n") {

                mainWeatherTop.style.backgroundImage = "url('../img/Cloudy2.png')"
                changeBG("#3f506e")
                bodyBG ="#344463"
            }

        if (climate === "chuvas fortes"
            || climate === "chuva moderada"
            || climate === "chuviscos com intensidade de raios"
            || climate === "Chuvisco"
            || climate === "chuva forte") {
 
                mainWeatherTop.style.backgroundImage = "url('../img/Rain1.png')" 
                changeBG("#152740")
                bodyBG ="#11253f"
 
 
            } else if (climate === "chuva leve"
            || climate === "Aguaceiros fracos"
            || climate === "chuvas") {
 
                mainWeatherTop.style.backgroundImage= "url('../img/Rain2.png')"
                changeBG("#1e4164")     
                bodyBG ="#153559"
 
            };
 
        if (climate === "Possibilidade de chuva irregular") {
 
                mainWeatherTop.style.backgroundImage = "url('../img/Chance_of_rain.png')"
                changeBG("#797c82")
                bodyBG ="#454c56"
 
 
            } else if (climate === "névoa") {
 
                mainWeatherTop.style.backgroundImage = "url('../img/Light-fog.png')"
                changeBG("#323355") 
                bodyBG ="#2b2b4e"
 
            };
 
        if (climate === "Chuva forte ou moderada com neve") {
 
                mainWeatherTop.style.backgroundImage = "url('../img/Snow1.png') " 
                changeBG("#081727")
                bodyBG ="#041323"
            } else if (climate === "Neve intensa") {
 
                mainWeatherTop.style.backgroundImage = "url('../img/Snow2.png')"   
                changeBG("#073c82")
                bodyBG ="#053b83"
            };
        } catch (err) {
        console.log(`Erro: ${err}`)
    }
}


function weatherAPIData (search) {
    var search = document.getElementById('searchCity').value
    return fetch(`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=a7200142d2ee4452ae7192822221309&q=${search}&State&format=json&lang=pt
    &showlocaltime=yes&showmap=yes&includelocation=yes&offset=negative`)

    .then((data) => data.json())
    .catch((err) => console.log(err))
}

async function weatherAPI(search) {
    var mainWeatherTemperature = document.querySelector('.mainWeatherTemperature')
    var feelsLike = document.querySelector('.feelsLike')
    var mainWeatherMaxTemperature = document.querySelector('.mainWeatherMaxTemperature') 
    var date = document.querySelector('.date')
    var todayMaxTemperature = document.querySelector('.todayMaxTemperature')
    var todayMinTemperature = document.querySelector('.todayMinTemperature')
    var todayMoisturePercent = document.querySelector('.todayMoisturePercent')
    var todaySymbol = document.getElementById('todaySymbol')
    var tomorrowMaxTemperature = document.querySelector('.tomorrowMaxTemperature')
    var tomorrowMinTemperature = document.querySelector('.tomorrowMinTemperature')
    var tomorrowSymbol = document.getElementById('tomorrowSymbol')
    var forecastMaxTemperature1 = document.querySelector('#forecastMaxTemperature1')
    var forecastMinTemperature1 = document.querySelector('#forecastMinTemperature1')
    var forecastMaxTemperature2 = document.querySelector('#forecastMaxTemperature2')
    var forecastMinTemperature2 = document.querySelector('#forecastMinTemperature2')
    var forecastMaxTemperature3 = document.querySelector('#forecastMaxTemperature3')
    var forecastMinTemperature3 = document.querySelector('#forecastMinTemperature3')
    var forecastMaxTemperature4 = document.querySelector('#forecastMaxTemperature4')
    var forecastMinTemperature4 = document.querySelector('#forecastMinTemperature4')
    var forecastMaxTemperature5 = document.querySelector('#forecastMaxTemperature5')
    var forecastMinTemperature5 = document.querySelector('#forecastMinTemperature5')
    var dayHeader1 = document.getElementById('dayHeader1')
    var dayHeader2 = document.getElementById('dayHeader2')
    var dayHeader3 = document.getElementById('dayHeader3')
    var dayHeader4 = document.getElementById('dayHeader4')
    var dayHeader5 = document.getElementById('dayHeader5')
    var nextDaySymbo1 = document.getElementById('day-1-symbol')
    var nextDaySymbo2 = document.getElementById('day-2-symbol')
    var nextDaySymbo3 = document.getElementById('day-3-symbol')
    var nextDaySymbo4 = document.getElementById('day-4-symbol')
    var nextDaySymbo5 = document.getElementById('day-5-symbol')

try {   
    const CityName = await weatherAPIData(search)

        mainWeatherTemperature.innerHTML = `${CityName.data.current_condition[0].temp_C}`
        feelsLike.innerHTML = `Real Sensação de: ${CityName.data.current_condition[0].FeelsLikeC}°c.`
        mainWeatherMaxTemperature.innerHTML = `Máxima prevista de: ${CityName.data.weather[0].maxtempC}c°.`
        date.innerHTML = `${CityName.data.time_zone[0].localtime.slice(11)}`
        todayMaxTemperature.innerHTML = `${CityName.data.weather[0].maxtempC}`
        todayMinTemperature.innerHTML = `${CityName.data.weather[0].mintempC}`
        todayMoisturePercent.innerHTML = `${CityName.data.current_condition[0].humidity}%`
        todaySymbol.src = `${CityName.data.weather[0].hourly[0].weatherIconUrl[0].value}`
        tomorrowMaxTemperature.innerHTML = `${CityName.data.weather[1].maxtempC}`
        tomorrowMinTemperature.innerHTML = `${CityName.data.weather[1].mintempC}`
        tomorrowSymbol.src = `${CityName.data.weather[1].hourly[0].weatherIconUrl[0].value}`
        forecastMaxTemperature1.innerHTML = `${CityName.data.weather[2].maxtempC}`
        forecastMinTemperature1.innerHTML = `${CityName.data.weather[2].mintempC}`
        forecastMaxTemperature2.innerHTML = `${CityName.data.weather[3].maxtempC}`
        forecastMinTemperature2.innerHTML = `${CityName.data.weather[3].mintempC}`
        forecastMaxTemperature3.innerHTML = `${CityName.data.weather[4].maxtempC}`
        forecastMinTemperature3.innerHTML = `${CityName.data.weather[4].mintempC}`
        forecastMaxTemperature4.innerHTML = `${CityName.data.weather[5].maxtempC}`
        forecastMinTemperature4.innerHTML = `${CityName.data.weather[5].mintempC}`
        forecastMaxTemperature5.innerHTML = `${CityName.data.weather[6].maxtempC}`
        forecastMinTemperature5.innerHTML = `${CityName.data.weather[6].mintempC}`
        dayHeader1.innerHTML = `${CityName.data.weather[1].date.slice(5)}`
        nextDaySymbo1.src = `${CityName.data.weather[1].hourly[0].weatherIconUrl[0].value}`
        dayHeader2.innerHTML = `${CityName.data.weather[2].date.slice(5)}`
        nextDaySymbo2.src = `${CityName.data.weather[2].hourly[0].weatherIconUrl[0].value}`
        dayHeader3.innerHTML = `${CityName.data.weather[3].date.slice(5)}`
        nextDaySymbo3.src = `${CityName.data.weather[3].hourly[0].weatherIconUrl[0].value}`
        dayHeader4.innerHTML = `${CityName.data.weather[4].date.slice(5)}`
        nextDaySymbo4.src = `${CityName.data.weather[4].hourly[0].weatherIconUrl[0].value}`
        dayHeader5.innerHTML = `${CityName.data.weather[5].date.slice(5)}`
        nextDaySymbo5.src = `${CityName.data.weather[5].hourly[0].weatherIconUrl[0].value}`
        
            console.log(CityName.data)
        } catch (err) {
        console.log(`Erro: ${err}`)
    }
    
}

export default {
    openWeatherAPI: openWeatherAPI,
    showWeatherData: showWeatherData,
    weatherAPIData: weatherAPIData,
    weatherAPI: weatherAPI
};