import React from "react";

const WeatherContext=React.createContext({
    cities:[],
    addCity: (name,temperature)=>{ },
});


export default WeatherContext;