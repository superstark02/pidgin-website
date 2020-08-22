import React, { Component } from 'react'
import {db} from '../../firebase'
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';

export class Notifications extends Component {

    state = {
        items:null
    }

    componentDidMount(){
        const data = db.collection("Users").doc("email").collection("OnGoingClasses")
        data.get().then(snapshot=>{
        })
    }

    render() {
        return (
            <div>
                <div className="desktop" >
                    <h1>
                        Notifications
                    </h1>
                    <div className="wrap" >
                    {
                        this.state.items ? (
                            <div>

                            </div>
                        ) : (
                            <div style={{textAlign:"center",color:"rgba(128,128,128,0.5)"}} >
                                <NotificationsNoneRoundedIcon style={{fontSize:"200px",color:"rgba(128,128,128,0.5)"}} />
                                <div>
                                    No Notifications Yet
                                </div>
                            </div>
                        )
                    }
                    </div>
                </div>
                <div className="mobile" >

                </div>
            </div>
        )
    }
}

export default Notifications
