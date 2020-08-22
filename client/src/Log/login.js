import React from 'react'
import firebase, { db } from '../firebase'
import Footer from '../Components/Footer'
import './log.css'
import VerticalTabs from './tabs'
import MappBar from '../Components/mAppBar'
import HelpPage from './mobile-profile'

export default class Login extends React.Component {

    state = {
        signed: null,
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ signed: user })
            }
        })
    }

    handleLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // The signed-in user info.
            //var user = result.user;firebase
        }).catch(function (error) {
            // Handle Errors here.
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;

            db.collection("LoginErrors").doc(email).set(
                {
                    errorMessage: errorMessage,
                    email: email,
                    credential: credential
                }
            )
        });
    }

    render() {
        if (this.state.signed !== null ) {
            return (
                <div>
                    <div className="desktop">
                        <div className="wrap" >
                            <div className="log-header" >
                                <div>
                                    <div className="profile-image profile-image-div" style={{ height: '100%', boxShadow: "none" }} >
                                        <img alt="" src={this.state.signed.photoURL} className="profile-image" />
                                    </div>
                                    <div className="display-name">
                                        {this.state.signed.displayName}
                                    </div>
                                    <div className='display-email' >
                                        {this.state.signed.email}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="wrap" >
                            <div style={{width:"1000px",padding:"30px 0px",display:"flex"}} >
                                <VerticalTabs/>
                            </div>
                        </div>

                    </div>
                    <div className="mobile" >
                        <MappBar/>
                        <div className="wrap" >
                            <div className="log-header" >
                                <div>
                                    <div className="profile-image profile-image-div" style={{ height: '100%', boxShadow: "none" }} >
                                        <img alt="" src={this.state.signed.photoURL} className="profile-image" />
                                    </div>
                                    <div className="display-name">
                                        {this.state.signed.displayName}
                                    </div>
                                    <div className='display-email' >
                                        {this.state.signed.email}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <HelpPage/>
                    </div>
                    <Footer/>
                </div>
            )
        }

        return(
            <div className="wrap" >
                Please Wait...
            </div>
        )
    }
}

