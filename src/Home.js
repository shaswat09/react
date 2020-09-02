import React  from "react";
import './App.css';

class Home extends React.Component{
  
   constructor(){
       super();
       console.log("home constr");
   }
   
   static getDerivedStateFromProps(){
    console.log("Inside getDerivedStateFromProps Home");
    return null;
  }

  componentDidMount(){
    console.log("Inside ComponentDidmount Home");
  }

      componentWillUnmount(){
        console.log("End: Home");
      }

    handleBack=()=>{
this.props.history.push("/");
    }
  
    render(){
    return(
        <div>
            Welcome to Home LOL <br />
            <button onClick={this.handleBack}>Back</button>
        </div>
    )
}
}
export default Home;