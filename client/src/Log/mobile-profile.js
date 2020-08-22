import React from 'react'
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';


class HelpPage extends React.Component{

    render(){
        
        return(
            <div>
                <Typography style={{fontSize:'12px',marginTop:'20px',color:'grey',marginLeft:'15px',marginBottom:'-10px'}}>Account</Typography>
                <Divider variant="inset" />
                <br/>

                <ListItem alignItems="flex-end" button  >
                    <ListItemAvatar>
                        <PlayCircleOutlineOutlinedIcon fontSize='inherit' color='inherit' style={{color:'grey',marginLeft:'15px'}} />
                    </ListItemAvatar>
                    <Typography style={{fontSize:'12px'}}>On Going Classes </Typography>
                    
                </ListItem>

                <ListItem alignItems="flex-end" button >
                    <ListItemAvatar>
                        <CreditCardOutlinedIcon fontSize='inherit' color='inherit' style={{color:'grey',marginLeft:'15px'}} />
                    </ListItemAvatar>
                    <Typography style={{fontSize:'12px'}}>Your Payments </Typography>
                    
                </ListItem>

                <ListItem alignItems="flex-end" button >
                    <ListItemAvatar>
                        <FavoriteBorderOutlinedIcon fontSize='inherit' color='inherit' style={{color:'grey',marginLeft:'15px'}} />
                    </ListItemAvatar>
                    <Typography style={{fontSize:'12px'}}>Liked Classes </Typography>
                    
                </ListItem>

                <ListItem alignItems="flex-end" button onClick={()=>this.openAnyActivity(this.state.phone,'https://pidgin-ds.web.app/notifications')} >
                    <ListItemAvatar>
                        <NotificationsNoneIcon fontSize='inherit' color='inherit' style={{color:'grey',marginLeft:'15px'}}/>
                    </ListItemAvatar>
                    <Typography style={{fontSize:'12px'}}>Notifications</Typography>
                </ListItem>

                <Typography style={{fontSize:'12px',marginTop:'20px',color:'grey',marginLeft:'15px',marginBottom:'-10px'}}>Team Up</Typography>
                <Divider variant="inset" />
                <br/>
                
                <ListItem alignItems="flex-end" button>
                    <ListItemAvatar>
                        <img alt="" width='17px' height='17px' style={{marginLeft:'15px',marginTop:'-10px'}} />
                    </ListItemAvatar>
                    <Typography style={{fontSize:'12px'}}>Put Your Class On Pidgin </Typography>
                    
                </ListItem>

                <Typography style={{fontSize:'12px',marginTop:'20px',color:'grey',marginLeft:'15px',marginBottom:'-10px'}}>Help</Typography>
                <Divider variant="inset" />
                <br/>

                <ListItem alignItems="flex-end" button >
                    <ListItemAvatar>
                        <HelpOutlineOutlinedIcon fontSize='inherit' color='inherit' style={{color:'grey',marginLeft:'15px'}} />
                    </ListItemAvatar>
                    <Typography style={{fontSize:'12px'}}>Help </Typography>
                    
                </ListItem>

                <ListItem alignItems="flex-end" button >
                    <ListItemAvatar>
                        <PowerSettingsNewIcon fontSize='inherit' color='inherit' style={{color:'grey',marginLeft:'15px'}} />
                    </ListItemAvatar>
                    <Typography style={{fontSize:'12px'}}>LogOut </Typography>
                </ListItem>

            </div>
        )
    }
}
export default HelpPage;