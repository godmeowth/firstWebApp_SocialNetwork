import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
import userReducer from "./usersReducer";
import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sideBar:sideBarReducer,
    usersPage:userReducer,
    auth: authReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store
export default store;