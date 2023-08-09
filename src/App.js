import classes from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import React, {Component, Suspense} from "react";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";
import {withRouter} from "./hoc/withRouter";
import store from "./redux/reduxStore";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));
const News = React.lazy(()=>import('./components/News/News'));
const Settings = React.lazy(()=>import('./components/Settings/Settings'));
const Music = React.lazy(()=>import('./components/Music/Music'));
const UsersContainer = React.lazy(()=>import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy(()=>import('./components/Profile/ProfileContainer'));
class App extends Component {
    catchAllUnhandledErrors =(promiseRejectionEvent) => {
        alert(promiseRejectionEvent);
    }
    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className={classes.appWraper}>
                <HeaderContainer/>
                <Navbar/>
                <div className={classes.appWraperContent}>
                    <Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path="/" element={<Navigate to="/profile" />} />
                            <Route path="/profile/:userId?"
                                   element={<ProfileContainer/>}/>
                            <Route path="/dialogs"
                                   element={<DialogsContainer/>}/>
                            <Route path="/users"
                                   element={<UsersContainer/>}/>
                            <Route path="/login"
                                   element={<Login/>}/>
                            <Route path="/news"
                                   element={<News/>}/>
                            <Route path="/music"
                                   element={<Music/>}/>
                            <Route path="/settings"
                                   element={<Settings/>}/>
                        </Routes>
                    </Suspense>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
}
export default SamuraiJSApp