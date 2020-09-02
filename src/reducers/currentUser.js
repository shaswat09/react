const currentUser=(state={},action)=>{

    switch(action.type){
case "SET_USER":
    console.log("REDUCER"+action.payload);
    return {
        ...state,
        user:action.payload,
        loggedIn:true
    }

case "LOG_OUT":
    console.log("REDUCERLOGOUT");
    return {
        ...state,
        user:{},
        loggedIn:false
    }

default:
    return state

    }
}

export default currentUser;