import React , {useEffect,useState} from 'react';
import './App.css';
import { MultiFun2 } from './Third';

function Hook(props){
   
    const [id,setId]=useState(0);
const [name,updateName]=useState(['Shashwat','Kinjal']);
const[title,setTitle]=useState('Default Title');
const[user,setUser]=useState({});
const[todo,setTodo]=useState({});

useEffect(()=>{
    console.log("UseEffect fun-----");
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response=>response.json())
   // .then(json=>setTitle(json.title))
   .then(json=>setUser(json))
}, [props.attr]) // This function will only be called if attr is changing

useEffect(()=>{
    console.log("Second UseEffect fun-----Always called");
    fetch('http://jsonplaceholder.typicode.com/users/1')
    .then(response=>response.json())
    .then(resjson=>setTodo(resjson))
    .catch(console.log)
},[])
   
    return(
        <div className="App">
             {`Title is: ${title}`} <br />
            {user.userId}   <br />
       {name.map((item) => { return <h1>{item}</h1> })}
            <br />
            {`Value of id is: ${id}`} <br />
      <button onClick={()=>{setId(id+1)}}>Increment</button>
      <button onClick={()=>{setId(id-1)}}>Decrement</button> <br />
      {props.attr} <br />
   {String(user.completed)} <br />
<MultiFun2 title={user.title}/>
        </div>
    );
}

export default Hook;