import React from 'react'
import firebase from '../firebase'
import './app-bar.css'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import logo from '../Images/app_bg.png'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, Button } from '@material-ui/core';
import '../CSS/Components/App-Bar.css'
import LogIn from '../Database/logIn'

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

class MyAppBar extends React.Component {

    state = {
        user: null
    }

    getUser = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ user: user.displayName })
            }
        });
    }

    handleLogin = () => {
        LogIn().then(result=>{
            this.setState({user:result})
        })
    }

    componentDidMount() {
        this.getUser()
    }

    render() {
        return (
            <React.Fragment>
                <div className="desktop" style={{marginBottom:"20px"}} >
                    <CssBaseline />
                    <ElevationScroll {...this.props}>
                        <AppBar style={{backgroundColor:"rgba(255,255,255,0.6)"}} >
                            <Toolbar>
                                <div className="wrap" style={{justifyContent:"space-between", padding:"5px 50px"}} >
                                    <div>
                                        <Link to='/' ><img src={logo} alt="pidgin" width="70px" height="70px" /></Link>
                                    </div>
                                    <div>
                                        <Link to="/pidgin/login" >
                                        {
                                            this.state.user === null ? (
                                                <Button className="app-bar-button" onClick={this.handleLogin} style={{textTransform:"none"}} >
                                                    Sign In
                                                </Button>
                                            ):(
                                                <Button className="app-bar-button" style={{textTransform:"none"}} >
                                                    {this.state.user}
                                                </Button>
                                            )
                                        }
                                        </Link>
                                        <Link to="/" >
                                        <Button className="app-bar-button" style={{textTransform:"none"}} >
                                            Help
                                        </Button>
                                        </Link>

                                        <Link to="/pidgin/about-us" >
                                        <Button className="app-bar-button" style={{textTransform:"none"}} >
                                            About
                                        </Button>
                                        </Link>
                                        
                                        <Link to="/pidgin/contact-us" >
                                        <Button className="app-bar-button" style={{textTransform:"none"}} >
                                            Contact Us
                                        </Button>
                                        </Link>

                                    </div>
                                </div>
                            </Toolbar>
                        </AppBar>
                    </ElevationScroll>
                    <Toolbar />
                </div>
            </React.Fragment>
        )
    }
}

export default MyAppBar;