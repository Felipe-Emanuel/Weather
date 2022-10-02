import weatherApi from './weatherApi.js'

const btnHideForecast = document.querySelector('#hideForecast')
const btnShowForecast = document.querySelector('#showForecast')
const btnHideSliderWeather = document.querySelector('#hideSliderWeather')
const btnShowSliderWeather = document.querySelector('#showSliderWeather')
const wheather = document.querySelector('.wheather')
const wheatherRight = document.querySelector('.wheatherRight')
const footerText = document.querySelector('.footerText')
const realFeel = document.querySelector('.realFeel')


// MAIN WEATHER HEADER SYMBOL ANIMATION
const mainWeatherTop = document.querySelector('.mainWeatherTop')
const mainWeatherTopSymbol = document.querySelector('.mainWeatherSymbol')

mainWeatherTop.addEventListener("mouseover", () => {
        mainWeatherTopSymbol.style.transition = '2s'
        mainWeatherTopSymbol.style.transform = 'translateX(-50%)'
        setTimeout(()=>{
            mainWeatherTopSymbol.style.transform = 'translateX(-0%)'  
        }, 1900)
});

// WORKING WITH SIDE BUTTON TO SHOW OR HIDE WEATHER RIGHTS SIDE
btnShowSliderWeather.addEventListener("click", () => {
   
    
    // SHOW RIGHT SIDE ANIMATION
    wheatherRight.style.display = "block"
    setTimeout(() => {
        wheatherRight.style.width = '55%'
     btnShowSliderWeather.style.display = "none"
     btnHideSliderWeather.style.display = "block"
     mainWeatherTop.style.borderRadius = '15px 0px 0px 0px'
}, 50)

})

btnHideSliderWeather.addEventListener("click", () => {
    // HIDE RIGHT SIDE ANIMATION
    wheatherRight.style.width = '0%'
    setTimeout(() => {
    btnHideSliderWeather.style.display = "none"
    btnShowSliderWeather.style.display = "block"
    wheatherRight.style.display = "none"
    mainWeatherTop.style.borderRadius = '15px 15px 0px 0px'
}, 550)
   
});

// SEARCH CITY
const btnEditCity = document.querySelector('#editCity')
const searchCity = document.querySelector('.searchCity')
var wheatherMiddle = document.querySelector('.wheatherMiddle')
var wheatherFooter = document.querySelector('.wheatherFooter')
var wheatherSliderImg = document.querySelector('.wheatherSliderImg')
var error = document.querySelector('.error')
var btnConf = document.querySelector('#btnConf')
var showAndHideSliderBtn = document.querySelector('.showAndHideSliderBtn')


function openWeater(){
    wheatherMiddle.style.display = "flex"
    wheatherFooter.style.display = "block"
    wheatherSliderImg.style.display = "block"
    tempSymbol.style.display = "block"
    realFeel.style.display = "flex"  
    btnShowSliderWeather.style.display = "block"
    btnConf.style.display = "block"
    showAndHideSliderBtn.style.display = "block"
}

function APIImport() {
    weatherApi.showWeatherData()
    weatherApi.weatherAPIData()
    weatherApi.weatherAPI()
    weatherApi.addImgFound()
    weatherApi.addNews()
}

btnEditCity.addEventListener("click", () => {
        
    if(searchCity.style.display === 'none') {
        searchCity.style.display = 'block';
        
        } else {
            searchCity.style.display = 'none'
            btnWeatherConfig.style.display = "block"
            openWeater()
            APIImport()
            startQueries()
            error.style.display = "none"

            if (btnHideSliderWeather.style.display === "block") {
                btnShowSliderWeather.style.display = "none"
            }
    
        if(btnWeatherConfigF.style.display === "block"){
            btnWeatherConfigC.style.display = "none"
        }
    }}
);

searchCity.addEventListener("keyup", (e) => {

    if (e.code === "Enter"){
        const search = e.target.value
        btnWeatherConfig.style.display = "block"
        APIImport(search)
        openWeater()
        startQueries()
        error.style.display = "none"

        if (btnHideSliderWeather.style.display === "block") {
            btnShowSliderWeather.style.display = "none"
        }

        if(btnWeatherConfigF.style.display === "block"){
            btnWeatherConfigC.style.display = "none"
        }}
    } 
);

// CELSIUS AND FAHRENHEIT
const btnWeatherConfig = document.querySelector('.btnWeatherConfig')
const btnWeatherConfigC = document.querySelector('.btnWeatherConfig.C')
const btnWeatherConfigF = document.querySelector('.btnWeatherConfig.F')
var temp = document.querySelectorAll('.temp')
var tempSymbol = document.getElementById('tempSymbol')
var mxTempSymbol = document.getElementById('mxTempSymbol')

function fahrenheit () {
   temp.forEach(temp => {
    temp.innerHTML = Math.round(temp.innerHTML * 1.8) + 32
   });
   tempSymbol.innerHTML = `°f`
   realFeelSymbol.innerHTML = `°f`
   mxTempSymbol.innerHTML = `°f`
}
function celsius () {
    temp.forEach(temp => {
    temp.innerHTML = Math.round((temp.innerHTML -32) / 1.8)
    });
    tempSymbol.innerHTML = `°c`
    realFeelSymbol.innerHTML = `°c`
    mxTempSymbol.innerHTML = `°c`
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

// AVERAGE CLIMATE
var tomorrowBePreaper = document.querySelector('.tomorrowBePreaper')
var tomorrow = document.querySelector('.tomorrow')
tomorrow.addEventListener("mouseover", (e) => {
    if (e.target === tomorrow) {
        tomorrowBePreaper.style.visibility = "hidden"
    } else tomorrowBePreaper.style.visibility = "visible"
    weatherApi.avarage();

})

weatherApi.avarageFooterClimate()

document.querySelectorAll('.img').forEach((img) => 
    img.addEventListener('mouseout', (e) => {
        if(e.target){
            footerText.style.visibility = "hidden"
        }
    }
))

// "DICA" BUTTON
var btnShowTip = document.querySelector('.btnShowTip')
var btnHideTip = document.querySelector('.btnHideTip')
var tip = document.querySelector('.tip')

btnShowTip.addEventListener("click", () => {
        btnHideTip.style.display = "flex"
        tip.style.width = '100%'
        btnShowTip.style.display = "none"
})

btnHideTip.addEventListener("click", () => {
        tip.style.width = '0%'
        setTimeout(() => {
            btnHideTip.style.display = "none"
            btnShowTip.style.display = "block"
        },550)
})

// THIS WILL WORK WITH RESPONSIVE AT 1200PX AND DESAPEAR WITH RIGHT SIDE OF THE WEATHER
var showAndHideSliderBtn = document.querySelector('.showAndHideSliderBtn')
const startQueries = () => {
    let newQuery = window.matchMedia ('(max-width: 1200px)')

    const queryListenChanges = query => {
        
        if (query.matches) {
            showAndHideSliderBtn.style.display = "none"
            wheatherRight.style.display = "none"
        } else {
            showAndHideSliderBtn.style.display = "block"
            wheatherRight.style.display = "block"
            
        }
    }

    newQuery.addListener(queryListenChanges)
    queryListenChanges(newQuery)
}