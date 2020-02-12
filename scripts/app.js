const form=document.querySelector("form");
const card=document.querySelector(".card");
const details=document.querySelector(".details");
const time=document.querySelector("img.time");
const icon=document.querySelector(".icon img");
const forecast= new Forecast();
console.log(forecast);


const updateUI = (data)=>{
    // const cityDet=data.cityDet;
    // const weather=data.weather;
    
//destructuring
    const {cityDet,weather}=data;
    console.log(weather);
    

    details.innerHTML= `
    <h5 class="my-3">${cityDet.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">

    
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

//usinng ternary operator
    const timeSrc=weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    //let timeSrc=null;

    // if(weather.IsDayTime){
    //     timeSrc='img/day.svg'
    // }
    // else{
    //     timeSrc='img/night.svg'
    // }

    time.setAttribute("src",timeSrc);


    let imgSrc=`img/icons/${weather.WeatherIcon}.svg`;

    icon.setAttribute('src',imgSrc);
}



// const updateDetails= async(city)=>{

//     const cityDet= await getCity(city);
//     const weather= await getWeather(cityDet.Key);

//     return {cityDet,weather}
 

// }



form.addEventListener("submit",e=>{
    e.preventDefault();
   const city= form.city.value.trim();

   localStorage.setItem('city',city);
   forecast.updateDetails(city)
   .then(data=> updateUI(data))
   .catch(err=>console.log(err)
   )
})


if(localStorage.getItem('city')){
    forecast.updateDetails(localStorage.getItem('city'))
    .then(data=> updateUI(data))
    .catch(err=>console.log(err))

}