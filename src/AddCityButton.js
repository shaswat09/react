import React,{useState} from "react";
import WeatherContext from "./Context";

const AddCityButton=(props)=>{

const context=React.useContext(WeatherContext);

const [name,setName]=useState('');

const submit=()=>{
context.addCity(name,Math.ceil(Math.random()*10));
setName('');
}

return(

    <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
        <button onClick={submit}>Add</button>
    </div>

);

};

export default AddCityButton;