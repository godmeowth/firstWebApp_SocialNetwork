import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
import userReducer from "./usersReducer";

let reducers = combineReducers({
    postsPage:profileReducer,
    dialogsPage:dialogsReducer,
    sideBar:sideBarReducer,
    usersPage:userReducer,
});
let store = createStore(reducers);
export default store;