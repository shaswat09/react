import React,{useState} from "react";
import './App.css';
import WeatherContext from "./Context";
import CityList from "./CityList";
import AddCityButton from "./AddCityButton";
import TemperatureAverage from "./TemperatureAverage";

function ContextApi(){

const[cities,setCities]=useState([]);

const addCity=(name,temperature)=>{
const newCity={name,temperature};
setCities(prevCities=>[...prevCities,newCity]);
};


    return(

        <WeatherContext.Provider value={{
cities,
addCity,
        }}>

        <div className="App">
     <h2>Weather App</h2>
<CityList></CityList>
<AddCityButton />
<TemperatureAverage />
        </div>
        </WeatherContext.Provider>
    );
}

export default ContextApi;