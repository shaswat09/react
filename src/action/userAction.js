const setUser=(userObj)=>{
    console.log("userAction");
    return{
        type:"SET_USER",
        payload:userObj
    }
}

const logOut=()=>{
    return{
        type:"LOG_OUT"
    }
}

export default {
    setUser,
    logOut
}