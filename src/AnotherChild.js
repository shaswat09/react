import React from 'react';
import './App.css';

class AnotherChild extends React.Component{
    
    constructor(props){
super(props);
this.state={
    id:props.uniqueId,
    user:{}
}
    }

    handleOnClk=(msg)=>{
this.props.getName(msg);
    }

    static getDerivedStateFromProps(props,state){
      console.log("Inside getDerivedStateFromProps Child");
      const updated=props.uniqueId*2;
        return {id:updated};
      }

      componentDidMount(){
        console.log("Inside ComponentDidmount Child");
        fetch('http://jsonplaceholder.typicode.com/users/1')
   .then(response=>response.json())
   .then(res=>this.setState({user:res}))
   .catch(console.log)

      }

      componentDidUpdate(){
        console.log("Inside ComponentDidUpdate Child");
      }


    render(){
        return(
           <React.Fragment>
     Child ClassComponent  :    {this.state.id} <br />
 {this.state.user.name} <br />
     {this.props.text} <br/>
     <button onClick={()=>this.handleOnClk("ChildToParent")} >ChildToParent ClassComponent</button> <br />
 ----------------------From REST API------------------------------------------
 {this.props.contacts.map((contact) => {
   return(
    <div> {contact.name} <t /> {contact.id} </div>
   );
 })}
 <br />
 
 ----------------------From REST API------------------------------------------ <br />
 </React.Fragment>
        );
    }
}
export default AnotherChild;