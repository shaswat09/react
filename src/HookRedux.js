import React , {useEffect,useState} from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import allActions from './action';

const HookRedux=(props)=>{
   
const currentUser=useSelector(state=>state.usr)

    const dispatch=useDispatch()
    const user={name:"Shaswat Talati"}
 
useEffect(()=>{
    console.log("UseEffect fun-----");
  dispatch(allActions.userAction.setUser(user));  
}, []) 
  
    return(
        <div className="App">
{
    currentUser.loggedIn ?
    <>
<h1>{`${currentUser.user.name}`}</h1>
<button onClick={()=>dispatch(allActions.userAction.logOut())}>Logout</button>
    </>
    :
    <>
<h1>
Login
</h1>
<button onClick={()=>dispatch(allActions.userAction.setUser(user))}>Login as Shaswat</button>
    </>
}
<br/>
LOL
{`${currentUser.loggedIn}`}


        </div>
    );
}

export default HookRedux;