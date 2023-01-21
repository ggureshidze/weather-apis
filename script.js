const tempDOM = document.getElementById('temp')
const cityDOM = document.getElementById('city')
const formDom = document.getElementById('form');
const humadityDOM = document.getElementById('humadity');
const iconDom = document.getElementById('icon');
const titleDOM = document.getElementById('title')

/* https://api.openweathermap.org/data/2.5/weather?q=kutaisi&appid=fc3ef3b244684d8f62d276fe81214e1b&units=metric */


/* https://openweathermap.org/img/wn/10d@2x.png */





const weatherAPP = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fc3ef3b244684d8f62d276fe81214e1b&units=metric `)
        const result = await response.json();
        tempDOM.textContent = "Temperature:  "  + result.main.temp +  `      Degree`
        humadityDOM.textContent =  "Humadity:  "  + result.main.humidity 
        const icon = result.weather[0].icon
        iconDom.src = `https://openweathermap.org/img/wn/` + icon + `@2x.png`
        document.body.style.backgroundImage = `url(https://source.unsplash.com/1920x1080/?${city})`

        titleDOM.textContent = `Weather in   ${city} `
    } catch (error) {
        alert(error)
        
    }


   


    
}


weatherAPP('kutaisi')

formDom.addEventListener("submit", e =>{
    e.preventDefault();
    if(cityDOM.value){
        weatherAPP(cityDOM.value)
    }
        
})