import classes from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React, {Component} from "react";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";
import {withRouter} from "./hoc/withRouter";
import store from "./redux/reduxStore";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
                <div className={classes.appWraper}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={classes.appWraperContent}>
                        <Routes>
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
    connect (mapStateToProps, {initializeApp})) (App);

const SamuraiJSApp = (props) =>{
   return  <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
}
export default SamuraiJSApp