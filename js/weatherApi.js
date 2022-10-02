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

// THIS WILL CHANGE ALL SITE BACKGROUND COLORS TO BE COMPATIBLE WITH THE CLIMATE IMAGE
function changeBG(color) {
    wheather.style.backgroundColor = color
    showAndHideSliderBtn.style.backgroundColor = color
    btnEditCity.style.backgroundColor = color
}

// HERE IS THE FIRST API, THAT WILL SEARCH FOR CITY, NAME, COUNTRY AND ALL CURRENTLY TEMPERATURE
const openWeatherAPI = async (city) => {
    var city = document.getElementById('searchCity').value
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherKey}&lang=pt_br&units=metric`;
    const res = await fetch(apiURL)
    const data = await res.json()
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
    
    // THIS TRY WILL WORK WITH BACKGROUND COLORS, BACKGROUNG IMAGE AND TIPS TO EACH POSSIBLE CLIMATE
    try {
        mainSymbol.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        cityIdentificator.innerHTML = `${data.name}`
        mainWeatherCity.innerHTML = `${data.name}, ${data.sys.country}`
        mainWeatherClimate.innerHTML = `${data.weather[0].description}`
        wind.innerHTML = `${data.wind.speed}Km/h`

        // THIS WILL WORK WITH CAPITALIZE THE CLIMATE STRING
            var climateSlice = climate.slice(1)
            var climateCharAt = climate.charAt(0)
            var climateCharAtToUp = climateCharAt.toUpperCase()
            var climateCapitalized =  climateCharAtToUp + climateSlice
            var cityFlagIdentificator = document.getElementById('cityFlagIdentificator')
            mainWeatherClimate.textContent = climateCapitalized
            cityFlagIdentificator.src = `https://countryflagsapi.com/png/${data.sys.country}`

        if(climate === "encoberto"
            || climate === "nublado"){
 
                mainWeatherTop.style.backgroundImage = "url('../img/Cloudy1.png')"
                changeBG("#12324d")
                document.body.style.backgroundColor ="#183857"
                tip.innerHTML = `Clima bom para um café e passeios a pé ou cobertor e chocolate quente`

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

            }
            
        if (climate === "nuvens dispersas" && climateIcon === "03d") {
 
                mainWeatherTop.style.backgroundImage = "url('../img/clearDay.png')"
                changeBG("#215c98")
                document.body.style.backgroundColor ="#265f99"
                tip.innerHTML = `Ótimo clima para estudar e focar`
        }
            
            else if (climate === "nuvens dispersas" 
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
            || climate === "garoa de leve intensidade"
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
    }
}

// 2ND API AND WILL WORK WITH WEATHER AND FORECAST DAYS (ALL ABOUT TOMORROW AND 5 DAYS LATER ITS HERE)
function weatherAPIData (search) {
    var search = document.getElementById('searchCity').value
    return fetch(`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=a7200142d2ee4452ae7192822221309&q=${search}&State&format=json&lang=pt
    &showlocaltime=yes&showmap=yes&includelocation=yes&offset=negative`)

    .then((data) => data.json())
    .catch((err) => console.log(err))
}

// ALL THAT NEEDED VARIABLES TO BE CHANGED WHEN A CITY IS SEARCHED. hERE IS REALLY SO MUCH, BUT BASICALLY ALL DOM
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
    var avarage1 = document.querySelector('.avarage-1')
    var avarage2 = document.querySelector('.avarage-2')
    var avarage3 = document.querySelector('.avarage-3')
    var avarage4 = document.querySelector('.avarage-4')
    var avarage5 = document.querySelector('.avarage-5')

// THIS ATTEMPT WORKS WITH CHANGES AND ATTEMPTS TO DEAL WITH CELSIUS AND FAHRENHEIT
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
                mainWeatherTemperature.innerHTML = `${CityName.data.current_condition[0].temp_F}`
                tempSymbol.innerHTML = `°f`
                feelsLike.innerHTML = `Sensação real de:`
                FeelsTemp.innerHTML = ` ${CityName.data.current_condition[0].FeelsLikeF}`
                realFeelSymbol.innerHTML = `°f`
                mxTempAbout.innerHTML = `Máxima prevista:`
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
                avarage1.innerHTML = `${CityName.data.weather[2].avgtempF}`
                avarage2.innerHTML = `${CityName.data.weather[3].avgtempF}`
                avarage3.innerHTML = `${CityName.data.weather[4].avgtempF}`
                avarage4.innerHTML = `${CityName.data.weather[5].avgtempF}`
                avarage5.innerHTML = `${CityName.data.weather[6].avgtempF}`
                

        } else {
            mainWeatherTemperature.innerHTML = `${CityName.data.current_condition[0].temp_C}`
            tempSymbol.innerHTML = `°c`
            feelsLike.innerHTML = `Sensação real de:`
            FeelsTemp.innerHTML = ` ${CityName.data.current_condition[0].FeelsLikeC}`
            realFeelSymbol.innerHTML = `°c`
            mxTempAbout.innerHTML = `Máxima prevista:`
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
            avarage1.innerHTML = `${CityName.data.weather[2].avgtempC}`
            avarage2.innerHTML = `${CityName.data.weather[3].avgtempC}`
            avarage3.innerHTML = `${CityName.data.weather[4].avgtempC}`
            avarage4.innerHTML = `${CityName.data.weather[5].avgtempC}`
            avarage5.innerHTML = `${CityName.data.weather[6].avgtempC}`

        }} catch (err) {
            var error = document.querySelector('.error')
            var wheatherMiddle = document.querySelector('.wheatherMiddle')
            var wheatherFooter = document.querySelector('.wheatherFooter')
            var wheatherSliderImg = document.querySelector('.wheatherSliderImg')
            var realFeel = document.querySelector('.realFeel')
            var showAndHideSliderBtn = document.querySelector('.showAndHideSliderBtn')
            var btnConf = document.querySelector('#btnConf')


            if (search = document.getElementById('searchCity').value === ""
            || (err)) {
                error.style.display = "block"
                wheatherMiddle.style.display = "none"
                wheatherFooter.style.display = "none"
                wheatherSliderImg.style.display = "none"
                tempSymbol.style.display = "none"
                realFeel.style.display = "none"  
                showAndHideSliderBtn.style.display = "none"
                btnConf.style.display = "none"
        }
    }
}

// ALL ABOUT AVERAGE CLIMATE AND YOUR VARIABLES
// 2ND API RECEIVE OTHER CALL HERE CAUSE THE WEATHER  IT'S NECESSARY AGAIN AND CAN'T DO IT JUST USING A FUNCTION... ALL FETCH HAS BE NECESSARY AGAIN
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

// THIS WILL WORKS WITH THE FOOTER TEXT WHEN THE CLIMATE ICONS RECIVE A MOUSEOVER
// LIKE ABOUT CLIMATE, 2ND API ITS NECESSARY A NEW FETCH AGAIN
function avarageFooterClimate() {
    var footerText = document.querySelector('.footerText')

    document.querySelectorAll('.img').forEach((img) => 
        img.addEventListener('mouseover', (e) => {
            if(e.target){
                footerText.style.visibility = "visible"
                e.target.parentNode;{

            function weatherAPIData (search) {
                var search = document.getElementById('searchCity').value
                return fetch(`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=a7200142d2ee4452ae7192822221309&q=${search}&State&format=json&lang=pt
                &showlocaltime=yes&showmap=yes&includelocation=yes&offset=negative`)
            
                .then((data) => data.json())
                .catch((err) => console.log(err))
            }
            // FOOTER TEXT TRY FOR EVERY POSSIBLE CLIMATE ICON
            async function weatherAPI(search) {
                try {   
                    const CityName = await weatherAPIData(search) 
                var avarageC = CityName.data.weather[1].avgtempC
                var avarageF = CityName.data.weather[1].avgtempF

                var avarage1C = CityName.data.weather[2].avgtempC
                var avarage2C = CityName.data.weather[3].avgtempC
                var avarage3C = CityName.data.weather[4].avgtempC
                var avarage4C = CityName.data.weather[5].avgtempC
                var avarage5C = CityName.data.weather[6].avgtempC

                var avarage1F = CityName.data.weather[2].avgtempF
                var avarage2F = CityName.data.weather[3].avgtempF
                var avarage3F = CityName.data.weather[4].avgtempF
                var avarage4F = CityName.data.weather[5].avgtempF
                var avarage5F = CityName.data.weather[6].avgtempF
                
                if (avarageC, avarage1C, avarage2C, avarage3C, avarage4C, avarage5C <= 5
                    || avarageF, avarage1F, avarage2F, avarage3F, avarage4F, avarage5F <= 41) {
        
                    footerText.innerHTML = `Media congelante 🥶`
        
                } else if (avarageC, avarage1C, avarage2C, avarage3C, avarage4C, avarage5C <= 18
                    || avarageF, avarage1F, avarage2F, avarage3F, avarage4F, avarage5F <= 65) {
                            
                    footerText.innerHTML = `Media muito fria 🏔`
        
                } else if (avarageC, avarage1C, avarage2C, avarage3C, avarage4C, avarage5C <= 29
                    || avarageF, avarage1F, avarage2F, avarage3F, avarage4F, avarage5F <= 84) {
        
                    footerText.innerHTML = `Media ligeiramente fresca ou clima abafado ☁`
        
                } else if (avarageC, avarage1C, avarage2C, avarage3C, avarage4C, avarage5C >= 30
                    || avarageF, avarage1F, avarage2F, avarage3F, avarage4F, avarage5F >= 86) {
        
                    footerText.innerHTML = `Media quente ou muito quente 🥵`
                }        
                    } catch (err) {
                        console.log(`Erro: ${err}`)
                    }
                }
            weatherAPI() 
        };
    }}
))}

// THIS API WILL SEARCH FOR IMAGES ABOUT THE CITY
const imgFound = async (img) => {
    var img = document.getElementById('searchCity').value
    const apiURL = `https://api.unsplash.com/search/photos?&query=${img}&client_id=GAtlL48GSkI5YOnY_bKr3PyWZPR5pEeMubCw5cTr1t8&lang=pt`
    const res = await fetch(apiURL)
    const data = await res.json()
    return data;
}

const addImgFound = async (img) => {
    const data = await imgFound(img)
    var wheatherSliderImg = document.querySelector('.wheatherSliderImg')
    var text = "A ideia aqui seria, mais pra frente, implementar um sistema de colheta de imagem e aprimoramento da API com envio de imagens"


    try{
        wheatherSliderImg.innerHTML =
        `<div id="carouselIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators" >
          <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src=${data.results[3].urls.small} class="d-block w-100" alt=${data.results[3].alt_description} height="250px" width="250px" style="border-radius: 20px">
          </div>
          <div class="carousel-item">
            <img src=${data.results[7].urls.small} class="d-block w-100" alt=${data.results[7].alt_description} height="250px" width="250px" style="border-radius: 20px">
          </div>
          <div class="carousel-item">
            <img src=${data.results[5].urls.small} class="d-block w-100" alt=${data.results[5].alt_description} height="250px" width="250px" style="border-radius: 20px">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>`

    } catch (err) {
        wheatherSliderImg.innerHTML = `<img height="100%" width="100%" style="border-radius: 20px" src="./img/error404.png" alt="Imagem não encontrada" id="imgSlide">
                                       <p class="errorIMG">Lamentamos, mas ainda não possuímos uma imagem deste local. Você poderia contribuir clicando logo abaixo 👀</p>
                                       <button type="button"
                                       class="contribute"
                                       data-bs-toggle="tooltip"
                                       data-bs-placement="bottom"
                                       title="${text}">Contribuir</button>`
    }
}

// IBGE NEWS API
const newsApi = async (news) => {
    var news = document.getElementById('searchCity').value
    const apiURL = `https://servicodados.ibge.gov.br/api/v3/noticias/?busca=${news}`
    const res = await fetch(apiURL)
    const data = await res.json()
    return data
}

const addNews = async (news) => {
    const data = await newsApi(news)
    var newsAbout = document.querySelector('.new')
    try{
        newsAbout.innerHTML = 
        `<h5 class ="type">Notícia IBGE</h5>
        <div class="notice">${data.items[0].titulo}.`
        
    } catch (err) {
        newsAbout.innerHTML = 
        `<h5 class ="type">Nenhuma nova pelo IBGE</h5>`
    }
}

export default {
    openWeatherAPI: openWeatherAPI,
    showWeatherData: showWeatherData,
    weatherAPIData: weatherAPIData,
    weatherAPI: weatherAPI,
    avarage: avarage,
    avarageFooterClimate:avarageFooterClimate,
    addImgFound: addImgFound,
    newsApi:newsApi,
    addNews:addNews

}
