import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
import userReducer from "./usersReducer";
import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./appReducer";
import newsReducer from "./newsReducer";

let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sideBar:sideBarReducer,
    usersPage:userReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    news: newsReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
export default store;