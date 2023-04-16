import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
import userReducer from "./usersReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sideBar:sideBarReducer,
    usersPage:userReducer,
});
let store = createStore(reducers, applyMiddleware(thunk));
window.store = store
export default store;