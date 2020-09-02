import React from "react";
import './App.css';
import { MultiFun } from "./Third";


function Child(props){

    function sayHello() {
        const Obj={
            "name":"Kinjal",
          "gender":"F"
          }
       props.getName("Functional:From Child to Parent");
       props.getHello("Hi",Obj);
      }
    
    return(
        <div className="App">
       {props.text} <br />
       {props.id} <br />
       {props.surname} <br />
       <button onClick={sayHello}>
     ChildToParent Functional Component
    </button>
        <MultiFun />
        </div>
    );
}


    


Child.defaultProps={
    surname:"Talati"
}
export default Child;