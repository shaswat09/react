import {createStore,combineReducers,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import bookReducer from '../reducers/reducer';
import currentUser from '../reducers/currentUser';

const combineReducer=combineReducers({
    bookStore:bookReducer,
    usr:currentUser
})
console.log("store");
const store=createStore(combineReducer,applyMiddleware(ReduxThunk));

export default store;