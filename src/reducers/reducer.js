import actionTypes from '../action/actionTypes';

const initialState={
booksData:[],
name:'Shaswat M Talati'
}

export default (state,action)=>{

    if(!state){
state=initialState;
    }

switch(action.type){

    case actionTypes.SAVE_BOOKS_DATA:{
        console.log("ReducerSAVE_BOOKS_DATA");
        state=Object.assign({},state,{booksData:action.payload});
       // return state;
       console.log("Switch: "+state.booksData);
    }
    return state;

    default:
        return state;
}


}