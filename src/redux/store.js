import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducers from "./usersReducer";
import thunkMiddleware from 'redux-thunk';
import appReducer from "./appReducer";

const reducers = combineReducers({
  auth: authReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducers,
  app: appReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;