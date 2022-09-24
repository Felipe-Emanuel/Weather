import openWeatherKey from './APIsKeys.js'

const showAndHideSliderBtn = document.querySelector('.showAndHideSliderBtn')
const btnWeatherConfigF = document.querySelector('.btnWeatherConfig.F')
const mainWeatherTop = document.querySelector('.mainWeatherTop')
var mainSymbol = document.querySelector('.mainSymbol')
var cityIdentificator = document.querySelector('.cityIdentificator')   
var mainWeatherCity = document.querySelector('.mainWeatherCity')  
var mainWeatherClimate = document.querySelector('.mainWeatherClimate')
var wheather = document.querySelector('.wheather')
var btnEditCity = document.getElementById('editCity')
var wind = document.querySelector('.wind')



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
    var tip = document.querySelector('.mainWeatherToDoTip')

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
        wind.innerHTML = `${data.wind.speed}Km/h`

        if(climate === "encoberto"
            || climate === "nublado"){
 
                mainWeatherTop.style.backgroundImage = "url('../img/Cloudy1.png')"
                changeBG("#12324d")
                document.body.style.backgroundColor ="#183857"
                tip.innerHTML = `Clima bom para um café e passeios a pé`

            } else if (climate === "algumas nuvens") {
 
                mainWeatherTop.style.backgroundImage = "url('../img/clearDay.png')"
                changeBG("#215c98")
                document.body.style.backgroundColor ="#265f99"
                tip.innerHTML = `Ótimo clima para estudar e focar`

            };
 
        if (climate === "poucas nuvens"){
 
                mainWeatherTop.style.backgroundImage = "url('../img/Cloudy2.png')"
                changeBG("#3f506e")
                document.body.style.backgroundColor ="#344463"
                tip.innerHTML = `Que tal uma piscina para refrescar?`
            }

        if (climate === "céu limpo" && climateIcon === "01n"
            || climate === "nuvens dispersas" && climateIcon === "03n") {
    
                mainWeatherTop.style.backgroundImage = "url('../img/ClearNight.png')"
                changeBG("#14253f")    
                document.body.style.backgroundColor ="#12233b"
                tip.innerHTML = `Noite perfeita para olhar o passado no céu`

            } else if (climate === "nuvens dispersas" 
            || climate === "céu limpo" && climateIcon === "01d") {

                mainWeatherTop.style.backgroundImage = "url('../img/Sunny.png')"
                changeBG("#234b89")
                document.body.style.backgroundColor ="#1c4482"
                tip.innerHTML = `Calor! Seria bom se refrescar`
                if(`${data.main.temp}` <= 13) {
                    tip.innerHTML = `Seria bom se agasalhar para o dia`
                }
            }
            
        if(climateIcon === "02n") {

                mainWeatherTop.style.backgroundImage = "url('../img/Cloudy2.png')"
                changeBG("#3f506e")
                document.body.style.backgroundColor ="#344463"
                tip.innerHTML = `Atente-se, o tempo está querendo fechar!`

            }

        if (climate === "chuvas fortes"
            || climate === "chuva moderada"
            || climate === "chuviscos com intensidade de raios"
            || climate === "Chuvisco"
            || climate === "chuva forte") {
 
                mainWeatherTop.style.backgroundImage = "url('../img/Rain1.png')" 
                changeBG("#152740")
                document.body.style.backgroundColor ="#11253f"
                tip.innerHTML = `Cuidado com os possíveis raios!`

            } else if (climate === "chuva leve"
            || climate === "Aguaceiros fracos"
            || climate === "chuvas") {
 
                mainWeatherTop.style.backgroundImage= "url('../img/Rain2.png')"
                changeBG("#1e4164")     
                document.body.style.backgroundColor ="#153559"
                tip.innerHTML = `Tempinho bom para uma série nova!`
 
            };
 
        if (climate === "Possibilidade de chuva irregular") {
 
                mainWeatherTop.style.backgroundImage = "url('../img/Chance_of_rain.png')"
                changeBG("#797c82")
                document.body.style.backgroundColor ="#454c56"
                tip.innerHTML = `possível aguaceiro chegando...`
 
            } else if (climate === "névoa") {
 
                mainWeatherTop.style.backgroundImage = "url('../img/Light-fog.png')"
                changeBG("#323355") 
                document.body.style.backgroundColor ="#2b2b4e"
                tip.innerHTML = `Não use farol alto e reduza sua velocidade...` 
            };
 
        if (climate === "Chuva forte ou moderada com neve"
            ||climate === "neve") {
 
                mainWeatherTop.style.backgroundImage = "url('../img/Snow1.png') " 
                changeBG("#081727")
                document.body.style.backgroundColor ="#041323"
                tip.innerHTML = `Frio denso, mantenha-se aquecido e cuide-se contra a chuva ou neve por vir`

            } else if (climate === "Neve intensa") {
 
                mainWeatherTop.style.backgroundImage = "url('../img/Snow2.png')"   
                changeBG("#073c82")
                document.body.style.backgroundColor ="#053b83"
                tip.innerHTML = `Que tal um boneco de neve?`
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
    var mainWeatherMaxTemperature = document.querySelector('.mainWeatherMaxTemperature.temp') 
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
    var tempSymbol = document.getElementById('tempSymbol')
    var realFeelSymbol = document.getElementById('realFeelSymbol')
    var mxTempSymbol = document.getElementById('mxTempSymbol')
    var FeelsTemp = document.querySelector('.FeelsTemp.temp')
    var mxTempAbout = document.querySelector('.mxTempAbout')
    var tomorrowBePreaper = document.querySelector('.tomorrowBePreaper')

try {   
    const CityName = await weatherAPIData(search)

        date.innerHTML = `${CityName.data.time_zone[0].localtime.slice(11)}`
        todayMoisturePercent.innerHTML = `${CityName.data.current_condition[0].humidity}%`
        todaySymbol.src = `${CityName.data.weather[0].hourly[0].weatherIconUrl[0].value}`
        tomorrowSymbol.src = `${CityName.data.weather[1].hourly[0].weatherIconUrl[0].value}`
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

        if (btnWeatherConfigF.style.display === "block") {
                mainWeatherTemperature.innerHTML = `${CityName.data.current_condition[0].FeelsLikeF}`
                tempSymbol.innerHTML = `°f`
                feelsLike.innerHTML = `Sensação real de:`
                FeelsTemp.innerHTML = ` ${CityName.data.current_condition[0].FeelsLikeF}`
                realFeelSymbol.innerHTML = `°f`
                mxTempAbout.innerHTML = `Máxima prevista de:`
                mainWeatherMaxTemperature.innerHTML = `${CityName.data.weather[0].maxtempF}`
                mxTempSymbol.innerHTML = `°f`
                todayMaxTemperature.innerHTML = `${CityName.data.weather[0].maxtempF}`
                todayMinTemperature.innerHTML = `${CityName.data.weather[0].mintempF}`
                tomorrowMaxTemperature.innerHTML = `${CityName.data.weather[1].maxtempF}`
                tomorrowMinTemperature.innerHTML = `${CityName.data.weather[1].mintempF}`
                forecastMaxTemperature1.innerHTML = `${CityName.data.weather[2].maxtempF}`
                forecastMinTemperature1.innerHTML = `${CityName.data.weather[2].mintempF}`
                forecastMaxTemperature2.innerHTML = `${CityName.data.weather[3].maxtempF}`
                forecastMinTemperature2.innerHTML = `${CityName.data.weather[3].mintempF}`
                forecastMaxTemperature3.innerHTML = `${CityName.data.weather[4].maxtempF}`
                forecastMinTemperature3.innerHTML = `${CityName.data.weather[4].mintempF}`
                forecastMaxTemperature4.innerHTML = `${CityName.data.weather[5].maxtempF}`
                forecastMinTemperature4.innerHTML = `${CityName.data.weather[5].mintempF}`
                forecastMaxTemperature5.innerHTML = `${CityName.data.weather[6].maxtempF}`
                forecastMinTemperature5.innerHTML = `${CityName.data.weather[6].mintempF}`
        } else {
            mainWeatherTemperature.innerHTML = `${CityName.data.current_condition[0].temp_C}`
            tempSymbol.innerHTML = `°c`
            feelsLike.innerHTML = `Sensação real de:`
            FeelsTemp.innerHTML = ` ${CityName.data.current_condition[0].FeelsLikeC}`
            realFeelSymbol.innerHTML = `°c`
            mxTempAbout.innerHTML = `Máxima prevista de:`
            mainWeatherMaxTemperature.innerHTML = `${CityName.data.weather[0].maxtempC}`
            mxTempSymbol.innerHTML = `°c`
            todayMaxTemperature.innerHTML = `${CityName.data.weather[0].maxtempC}`
            todayMinTemperature.innerHTML = `${CityName.data.weather[0].mintempC}`
            tomorrowMaxTemperature.innerHTML = `${CityName.data.weather[1].maxtempC}`
            tomorrowMinTemperature.innerHTML = `${CityName.data.weather[1].mintempC}`
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

        }} catch (err) {
        console.log(`Erro: ${err}`)
    }
}

// function teste() {
//     weatherAPIData()

// }

    // AVERAGE

function avarage() {
    var tomorrowBePreaper = document.querySelector('.tomorrowBePreaper')

    function weatherAPIData (search) {
        var search = document.getElementById('searchCity').value
        return fetch(`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=a7200142d2ee4452ae7192822221309&q=${search}&State&format=json&lang=pt
        &showlocaltime=yes&showmap=yes&includelocation=yes&offset=negative`)
    
        .then((data) => data.json())
        .catch((err) => console.log(err))
    }

    async function weatherAPI(search) {
        try {   
            const CityName = await weatherAPIData(search) 
            if (btnWeatherConfigF.style.display === "block") {

                tomorrowBePreaper.innerHTML = `média de amanhã: ${CityName.data.weather[1].avgtempF} °f` 
                
            } else {

                tomorrowBePreaper.innerHTML = `média de amanhã: ${CityName.data.weather[1].avgtempC} °c` 

            }} catch (err) {
                console.log(`Erro: ${err}`)
            }
    }
    weatherAPI()  
}

function avarageFooterClimate() {
    function weatherAPIData (search) {
        var search = document.getElementById('searchCity').value
        return fetch(`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=a7200142d2ee4452ae7192822221309&q=${search}&State&format=json&lang=pt
        &showlocaltime=yes&showmap=yes&includelocation=yes&offset=negative`)
    
        .then((data) => data.json())
        .catch((err) => console.log(err))
    }

    async function weatherAPI(search) {
        try {   
            const CityName = await weatherAPIData(search) 
        var footerText = document.querySelector('.footerText')
        var avarageC = CityName.data.weather[1].avgtempC
        var avarageF = CityName.data.weather[1].avgtempF
    
        if (avarageC <= 5 || avarageF <= 41) {

            footerText.innerHTML = `Media congelante 🥶`

        } else if (avarageC <= 18 || avarageF <= 65) {
                    
            footerText.innerHTML = `Media muito fria 🏔`

        } else if (avarageC  <= 29 || avarageF <= 84) {

            footerText.innerHTML = `Media ligeiramente fresca ou clima abafado ☁`

        } else if (avarageC >= 30 || avarageF >= 86) {

            footerText.innerHTML = `Media quente ou muito quente 🥵`
        }
            console.log(CityName.data)

            } catch (err) {
                console.log(`Erro: ${err}`)
            }
        }
        weatherAPI()  
}

export default {
    openWeatherAPI: openWeatherAPI,
    showWeatherData: showWeatherData,
    weatherAPIData: weatherAPIData,
    weatherAPI: weatherAPI,
    avarage: avarage,
    avarageFooterClimate: avarageFooterClimate
}