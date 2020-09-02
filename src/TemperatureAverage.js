import React,{useState} from "react";
import WeatherContext from "./Context";

const TemperatureAverage=(props)=>{

    const context=React.useContext(WeatherContext);

    if(context.cities.length==0){
return(
    <div>Add some cities to view their average temperature</div>
);
    };

let total=0;
    for(const city of context.cities){
total+=city.temperature;
    }

    const average=total/context.cities.length;


    return(
<div>The average is <b>{average.toFixed(2)}</b> degrees Fahrenheit</div>
    );
};

export default TemperatureAverage;