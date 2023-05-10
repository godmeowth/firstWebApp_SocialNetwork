import React from "react";

class ProfileStatus extends React.Component{
    state = {
        editMode: false,
        status: this.props.status
    }

   activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus()
    }
    onStatusChange = (e) =>{
        this.setState({
            state: e.currentTarget.value
        })

    }

   render() {
       return(
           <div>
               {!this.state.editMode &&
                   <div>
                       <span onDoubleClick={this.activateEditMode }>{this.state.status || 'no status'}</span>
                   </div>
               }
               {this.state.editMode &&
                   <div>
                   <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                   </div>
               }
           </div>
       )
   }


}
export default ProfileStatus;