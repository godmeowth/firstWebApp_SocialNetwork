import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import style from "../common/FormsControls/FormsControls.module.css"
const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Email"} name={"email"}
                        validate={[required]}
                        component={Input}
                        /></div>

            {props.error && <div className={style.formSummaryError}>{props.error}</div>}

            <div><Field placeholder={"Password"} name={"password"} type={"password"}
                        validate={[required]}
                        component={Input}/></div>

            <div><Field type={"checkbox"} component={"input"} name={"rememberMe"} />Remember me</div>
            <div><button>Login</button></div>

        </form>
    </div>
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) =>{
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe)
        console.log(login)
    }
    if(props.isAuth){
        return <Navigate to={"/profile"}/>
    }
    return(<div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
    </div>
    )
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})
export default connect (mapStateToProps, {login}) (Login)