import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducers from "./usersReducer";
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
  auth: authReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducers
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;