import React  from "react";
import './App.css';

export function MultiFun(props){
    return(
        <div className="App">
        LOL
        </div>
    );
}

export function MultiFun1(props){
    return(
        <div className="App">
        This is coming from multifunction1 <br />
        {props.name} 
        </div>
    );  
}

export function MultiFun2(props){
    return(
        <div className="App">
        This is coming from multifunction 2<br />
      {props.title}
        </div>
    );

    
}
