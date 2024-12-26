function find(){
    let apikey = "4699afa26ce9bc6e22d95f2e92acf1f9";
    let city=document.getElementById("citynm").value
    console.log(city)
    // let a = "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
    .then(response => response.json())
    .then((res)=>{
        console.log(res)
        document.getElementById('tem').innerHTML= fetchdata(res) 
    })
    .catch((err) => {console.log(err)});
}
function fetchdata(res) {
    const iconUrl = `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png;`

    return `
        <h1>city:${res.name}</h1>
        <h2>${res.main.temp}°C</h2>
        <h2>Min temperature : ${res.main.temp_min}</h2>
        <h2>Min temperature : ${res.main.temp_max}</h2>
        <img src="${iconUrl}" alt="${res.weather[0].description}">
        <p> wind speed: ${res.wind.speed}</p>
    `;
}