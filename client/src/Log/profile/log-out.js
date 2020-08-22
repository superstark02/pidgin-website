import React, { Component } from 'react'
import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';
import './profile.css'
import firebase from '../../firebase'

export class Logout extends Component {

    handleLogout = () => {
        firebase.auth().signOut().then(function () {
            console.log("Logged Out")
        }).catch(function (error) {
            console.log(error)
        });
    }

    render() {
        return (
            <div>
                <div className="desktop">
                    <h1>Logout</h1>
                    <div>
                        Logout from Pidgin account.
                    </div>
                    <div className="wrap" style={{textAlign:"center"}} >
                        <div>
                            <button className="glow-button" onClick={this.handleLogout} >
                                <PowerSettingsNewRoundedIcon style={{marginBottom:"-5px"}} /> Logout
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mobile" >
                </div>
            </div>
        )
    }
}

export default Logout

