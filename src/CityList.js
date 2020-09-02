import React from "react";
import WeatherContext from "./Context";

const CityList=(props)=>{
    const context=React.useContext(WeatherContext);

    return(

       <table border="1">
           <thead>
            <tr>
                <th>
                    City
                </th>
                <th>
                    Temperature
                </th>
            </tr>
            </thead>
            <tbody>
                {context.cities.map((city,k)=>(
<tr key={k}>
                <td>{city.name}</td>  
                <td>{city.temperature}</td>  
</tr>
                ))}
            </tbody>
            </table>
    
    );

};

export default CityList;