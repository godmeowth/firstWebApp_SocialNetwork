import {CreateField, Input, TextArea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import classes from "./ProfileInfo.module.css";
const ProfileDataForm = ({handleSubmit, profile}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>Save</button></div>
        <div>Full name: {CreateField("Full Name", 'fullName', [], Input)}</div>
        <div>Looking for a job: {CreateField("", 'lookingForAJob', [], Input, {type: 'checkbox'})}</div>
        <div>About me: {CreateField("About me",'aboutMe', [], Input)} {CreateField('My Skills', 'lookingForAJobDescription', [], TextArea)}</div>
        <div>
            Contacts: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={classes.contact}>
                <b>{key}: {CreateField(key, 'contacts'+key , [], Input)}</b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile', enableReinitialize: true, destroyOnUnmount: false}) (ProfileDataForm)
export default ProfileDataFormReduxForm
