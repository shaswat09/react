import React from 'react';
import logo from './logo.svg';
import lgo from './download.png';
import './App.css';
import Sec from './Second'
import { MultiFun1 } from './Third';
import AnotherChild from './AnotherChild';
import Hook from './Hook';
import Axios from 'axios';

class App extends React.Component {

  constructor(){
    super();
    console.log("App constructor");
    this.state = {
      value:0,
      text:"Hello From Child.....",
      img:lgo,
      name:'',
      Gender:'',
      attr:'Hook',
      contacts:[],
      uName:'',
      loggin:'N'
    }
  }

  static getDerivedStateFromProps(){
    // This method will be executed after Increment function is called on updating phase
    // This method will also called during mounting phase before render method
    console.log("Inside getDerivedStateFromProps Parent");
    return null;
  }

  componentDidMount(){
    this.setUpAxiosInterceptor();
    console.log("Inside ComponentDidmount Parent");
    this.setState({value:this.state.value+1}); // Update phase will be start
   fetch('http://jsonplaceholder.typicode.com/users')
   .then(response=>response.json())
   .then((data)=>{
     this.setState({contacts:data})
   })
   .catch(console.log)
  }

  componentDidUpdate(){
    console.log("Inside ComponentDidUpdate Parent");
  }

  Increment=()=>{
    this.setState({value:this.state.value+1,text:"Kinjal Shaswat Talati"});
  }

  Decrement=()=>{
    this.setState({value:this.state.value-1});
  }
  ChangeImg=()=>{
    alert('LOL');
    if(this.state.img==lgo){
      this.setState({img:logo});
      this.setState({attr:"React Hooks"});
    }else{
      this.setState({img:lgo});
      this.setState({attr:"Hooks"});
  }
}


handleFormChange=(event)=>{
this.setState({[event.target.name]:event.target.value})
}

handleSubmit=(event)=>{
const Obj={
  "name":this.state.name,
"gender":this.state.Gender
}
alert(JSON.stringify(Obj));
event.preventDefault();
}

handleReset=()=>{
  this.setState({name:'',Gender:''});
}

handleNavigate=()=>{
this.props.history.push("/home");
}

goToBlog=()=>{
  this.props.history.push("/blog");
  }

  goToBookRedux=()=>{
    this.props.history.push("/books");
    }

    goToHookRedux=()=>{
      this.props.history.push("/hookredux");
      }

      goToContextApi=()=>{
        this.props.history.push("/contextapi");
        }

handleChildToParent=(msg)=>{
alert(msg); 
// We can also set in state the value which is returned from child
}

componentWillUnmount(){
  console.log("End: App component, componentWillUnmount");
}

handleSayHello=(msg,obj)=>{
alert(msg);
}

loginSession=()=>{
if(this.state.uName==='shaswat09'){
  this.setState({loggin:'Y'});
  sessionStorage.setItem('authenticatedUser',this.state.uName);
this.props.history.push(`/welcome/${this.state.uName}`);
}
}

isUserloggedIn=()=>{
  if(sessionStorage.getItem('authenticatedUser')!=null){
return true;
  }else{
return false;
  }
}

logout=()=>{
  sessionStorage.removeItem('authenticatedUser');
  this.setState({loggin:'N'});
}

setUpAxiosInterceptor=()=>{
  Axios.interceptors.request.use(req=>{
    req.headers.authorization="someSecrettoken";
    return req;
  });
}

  render() {
    const isUserloggedInnn=this.isUserloggedIn();
  return (
    <div className="App">
    Shaswat Talati, {this.state.text}
      <h1>{this.state.value}</h1>
      <button onClick={this.Increment}>Increment</button>
      <button onClick={this.Decrement}>Decrement</button>
    <Sec text="Kinjal Shah" id={this.state.value} getName={this.handleChildToParent} getHello={this.handleSayHello} />
    <MultiFun1 name={this.state.text} />
    <AnotherChild uniqueId={this.state.value} text={this.state.text} getName={this.handleChildToParent} contacts={this.state.contacts} />
    <img src={this.state.img} onClick={this.ChangeImg}></img>
    <form onSubmit={this.handleSubmit}> 
<label>Name:</label><br />
<input type="text" value={this.state.name} name="name"  onChange={this.handleFormChange} /> <br />
<label>Gender: </label>
<label>Male:</label>
<input type="radio" name="Gender" value='Male' onChange={this.handleFormChange}></input>
<label>Female:</label>
<input type="radio" name="Gender" value='Female' onChange={this.handleFormChange}></input><br />
<input type="submit" ></input>
<input type="reset" onClick={this.handleReset}></input>
    </form> <br />
    <button onClick={this.handleNavigate}>Go to Next Component</button> <br /> <br />
    -------------------------Hooks-----------------------------------------------------<br />
    <Hook attr={this.state.attr} />

    <button onClick={this.goToBlog}>Go to Book REST API</button> <br /> <br />
    <button onClick={this.goToBookRedux}>Go to Book REST API Redux</button> <br /> <br />
    <button onClick={this.goToHookRedux}>Go to Hook Redux</button> <br /> <br />
    <button onClick={this.goToContextApi}>Context API</button> <br /> <br />
   {!isUserloggedInnn && <div>UserName: <input type="text" value={this.state.uName} name="uName"  onChange={this.handleFormChange} /></div>} <br />
    {!isUserloggedInnn && <button onClick={this.loginSession}>Login</button> } <br />
    {isUserloggedInnn && <button onClick={this.logout} > LOGOUT</button>} <br />
    </div>
  );
}
}
export default App;
