class Forecast{
    constructor(){
        this.key='c9zG4NspZ9xbMebm9fRGMDHDDZ1XyRDB';
        this.cityURI='http://dataservice.accuweather.com/locations/v1/cities/search';
        this.watherURI="http://dataservice.accuweather.com/currentconditions/v1/";

    }


    async updateDetails(city){
        const cityDet= await this.getCity(city);
        const weather= await this.getWeather(cityDet.Key);

    return {cityDet,weather}
 
    }

    async getCity(city){
        const query=`?apikey=${this.key}&q=${city}`;
        const response= await fetch(this.cityURI+query);
        const data = await response.json();
       return data[0];
    }

    async getWeather(id){
        const query=`${id}?apikey=${this.key}`;
        const response= await fetch(this.watherURI+query);
        const data= await response.json();
        return data[0];
    }
}



//get weather information
// const getWeather=async(id)=>{
   
// }


//get city informartion
// const getCity= async(city)=>{

  
  

// }

// getCity('pune').then(data => getWeather(data.Key))
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err));

