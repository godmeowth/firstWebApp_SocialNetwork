import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sideBarReducer,
});
let store = createStore(reducers);
export default store;