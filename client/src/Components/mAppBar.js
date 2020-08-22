import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { IconButton, Divider } from '@material-ui/core';
import logo from '../Images/app_bg.png';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import store from '../Images/store.png'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import firebase from '../firebase'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

function MappBar(props) {

    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [user,setUser] = React.useState(null)

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    React.useEffect(()=>{
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                setUser(user)
            }
        })
    })

    const handleLogout = () => {
        firebase.auth().signOut().then(function () {
            console.log("Logged Out")
        }).catch(function (error) {
            console.log(error)
        });
    }

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            
            <div style={{padding:'20px 15px'}} >
                <div>
                    {
                        user === null ? (
                            <a href="/pidgin/login" >
                            <div style={{display:"flex",width:"100%",alignItems:'center'}} >
                                <div style={{fontSize:"40px",color:"grey",height:"100%",display:"flex",alignItems:'center',marginRight:"10px"}} >
                                    <AccountCircleIcon style={{fontSize:'50px'}} />
                                </div>
                                <div>
                                    <button style={{border:"none",outline:"none",padding:"10px 15px",color:"#043540"}} >
                                        Sign In
                                    </button>
                                </div>
                            </div>
                            </a>
                        ) : (
                            <div style={{display:"flex",width:"100%",alignItems:'center'}} >
                                <div style={{fontSize:"40px",color:"grey",height:"100%",display:"flex",alignItems:'center',marginRight:"10px"}} >
                                    <img alt="" src={user.photoURL} width="50px" style={{borderRadius:"50%"}} />
                                </div>
                                <div>
                                    <div style={{fontSize:"17px",fontWeight:'600'}} >
                                        {user.displayName}
                                    </div>
                                    <div style={{fontWeight:'400',fontSize:'13px'}} >
                                        {user.email}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <List style={{textAlign:"center"}} >
                    <ListItem button >
                        
                        <a href="/" ><ListItemText primary='Home' style={{color:'grey'}} /></a>
                    </ListItem>
                    <ListItem button >
                        
                        <a href="/pidgin/courses" ><ListItemText primary='How To Use' style={{color:'grey'}}  /></a>
                    </ListItem>
                    <ListItem button >
                        
                        <a href="/pidgin/blogs" ><ListItemText primary='Blogs' style={{color:'grey'}}  /></a>
                    </ListItem>
                    <ListItem button >
                        
                        <a href="/pidgin/webinars" ><ListItemText primary='Webinars' style={{color:'grey'}}  /></a>
                    </ListItem>
                    <ListItem button >
                        
                        <a href="/pidgin/help" ><ListItemText primary='Help' style={{color:'grey'}}  /></a>
                    </ListItem>
                    <Divider/>
                    <ListItem button >
                        
                        <a href="/pidgin/about-us" ><ListItemText primary='About Us' style={{color:'grey'}}  /></a>
                    </ListItem>
                    <ListItem button >
                        
                        <a href="/pidgin/contact-us" ><ListItemText primary='Contact Us' style={{color:'grey'}}  /></a>
                    </ListItem>
                    {
                        user !== null ? (
                            <ListItem button >
                                <ListItemIcon>{<ExitToAppIcon />}</ListItemIcon>
                                <ListItemText primary='Logout' style={{color:'grey'}} onClick={handleLogout} />
                            </ListItem>
                        ):(
                            <div></div>
                        )
                    }
                </List>
            </div>
            <a href='https://play.google.com/store/apps/details?id=com.ds.pidgin' ><img alt='s' src={store} width='100%' /></a>
        </div>
    );

    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar style={{ backgroundColor: 'white', color: 'black', display: 'flex', justifyContent: 'space-between', alignContent: 'center' }} >
                        <Typography variant="h6"><img alt="s" src={logo} width='50px' style={{ marginTop: '10px' }} /></Typography>
                        <IconButton onClick={toggleDrawer('right', true)} color="inherit"><MenuRoundedIcon /></IconButton>
                        <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
                            {list('right')}
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </React.Fragment>
    );
}
export default MappBar;