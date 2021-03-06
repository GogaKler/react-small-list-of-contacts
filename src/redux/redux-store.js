import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import UsersReducer from "./users-reducer";

let reducers = combineReducers(
	{
		users: UsersReducer
	}
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store.getState();
export default store;