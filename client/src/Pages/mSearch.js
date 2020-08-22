import React from 'react'
import './ClassFilter.css'
import {FaMap} from 'react-icons/fa'
import TuneRoundedIcon from '@material-ui/icons/TuneRounded';
import { Divider, Dialog, IconButton, Button } from '@material-ui/core'
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import Slider from '@material-ui/core/Slider';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import NightsStayRoundedIcon from '@material-ui/icons/NightsStayRounded';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
import AccountBalanceWalletTwoToneIcon from '@material-ui/icons/AccountBalanceWalletTwoTone';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

var age
var fees

var categories = [
    {
        key:0,
        value:"Art"
    },
    {
        key:1,
        value:"Music"
    },
    {
        key:2,
        value:"Dance"
    },
    {
        key:3,
        value:"French"
    }
]
  

const marksFees = [
    {
      value: 0,
      label: 'No Fees'
    },
    {
        value: 1000,
        label: "₹ 1000"
    },
    {
        value: 2000,
        label: "₹ 2000"
    },
    {
        value: 3000,
        label: "₹ 3000"
    },
    {
        value: 4000,
        label: "₹ 4000"
    },
    {
        value: 5000,
        label: "₹ 5000"
    },
    {
        value: 6000,
        label: "₹ 6000"
    },
    {
        value: 7000,
        label: "₹ 7000"
    },
    {
        value: 8000,
        label: "₹ 8000"
    },
    {
        value: 9000,
        label: "₹ 9000"
    },
    {
      value: 10000,
      label:'Any'
    },
  ];

  const marksAge = [
    {
      value: 20,
      label:'Any'
    },
    {
        value: 5,
        label:'5 Years'
    },
  ];

const marksTime = [
    {
      value: 0,
      label:<WbSunnyRoundedIcon/>
    },
    {
        value: 50,
        label:<Brightness4OutlinedIcon/>
    },
    {
      value: 100,
      label: <NightsStayRoundedIcon/>
    },
  ];

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
        style={{width:'100%',minHeight:'100%'}}
      >
        {value === index && (
          <div style={{minHeight:'100%'}} >{children}</div>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  

class SearchView extends React.Component{
    state = {
        classes:null,
        filterAge:20,
        open:true,
        value:1,
        ageValue: 20,
        feesValue: 1000,
    }

    constructor(){
        super();
        this.state = {
            search:null
        };
        this.handleClose = this.handleClose.bind(this)
    }

    handleClose = () => {
        this.setState({open:false})
    }

    handleChangeTabs = (event, newValue) => {
        this.setState({value:newValue})
    }

    handleSliderAge = (event,newValue) => {
        this.setState({ageValue:newValue})
    }

    handleSliderFees = (event,newValue) => {
        this.setState({feesValue:newValue})
    }

    clearFilter = () => {
        this.setState({ageValue:20,feesValue:10000,search:null})
    }

    componentDidMount(){
        this.clearFilter()
        this.setState({classes:this.props.classes})
    }

    updateSearch(event){
        this.setState({search:event.target.value})
        this.clearFilter()
    }

    render(){
        age=""
        fees=""
        if(this.state.feesValue!==10000){
            fees = <Chip
                        variant="outlined"
                        size="small"
                        icon={<AccountBalanceWalletTwoToneIcon/>}
                        label={"₹ "+this.state.feesValue}
                        clickable
                        color="secondary"
                        style={{marginRight:'10px'}}
                    />
        }
        if(this.state.ageValue!==20){
            age = <Chip
                        variant="outlined"
                        size="small"
                        icon={<CheckCircleTwoToneIcon/>}
                        label={this.state.ageValue+" years"}
                        clickable
                        color="secondary"
                        style={{marginRight:'10px'}}
                    />
        }

        let filteredClass = this.state.classes

        if(this.state.classes!=null){
           filteredClass =  this.state.classes.filter(
               item => 
                    item.age < this.state.ageValue &&
                    item.fees < this.state.feesValue
            )
        }

        if(this.state.search!=null&&this.state.classes!=null){
            filteredClass = this.state.classes.filter(
                (classes)=>{
                    return classes.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 
                }
            );
        }

        return(
            <div style={{backgroundColor:'white',width:'100%',minHeight:"100vh"}}>
                <div style={{display:'flex', padding:'0px 5px',maxWidth:'100%'}}>
                    <input placeholder={"Search classes, subjects, gyms..."} class='searchInput' value={this.state.search}
                    onChange={this.updateSearch.bind(this)} onSubmit={this.updateSearch.bind(this)}  />
                </div>

                <div style={{padding:'0px 15px',display:'flex'}} onClick={()=>{this.setState({open:true})}} >
                    <Chip
                        variant="outlined"
                        size="small"
                        icon={<TuneRoundedIcon/>}
                        label="Filters"
                        clickable
                        color="secondary"
                        style={{marginRight:'10px'}}
                    /> {age} {fees}
                </div>
                <div style={{backgroundColor:'white',padding:'5px',width:'100%',maxWidth:'100%'}}> 
                    {
                        filteredClass&&
                        filteredClass.map(classes=>{
                        return(
                            <div class='item' style={{width:'auto'}}>
                                <a href={"/class/"+classes.id} >
                                <div class='showImage' >
                                {classes.i1 ? (
                                    <div class='alternateImg' >
                                        <img alt="s" src={classes.i1} height='200px' style={{ marginRight: '2px' }}></img>
                                        <img alt="s" src={classes.i2} height='200px' style={{ marginRight: '2px' }}></img>
                                        <img alt="s" src={classes.i3} height='200px' style={{ marginRight: '2px' }}></img>
                                    </div>
                                    ) : (
                                        <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'space-around',alignItems:'center'}} >
                                            <img alt="s" src={classes.i2}  height='200px' ></img>
                                        </div>
                                        )}
                                </div>

                                <div style={{display:'flex',position:'absolute',zIndex:'50'}}  >
                                    <div class='age'>
                                        Age: {classes.age}+
                                    </div>
                                    <div class='newType' >
                                        {classes.type}
                                    </div>
                                </div>
                                </a>
                                <div class='container-search'>
                                    <a href={"/class/"+classes.id} >
                                    <div class='name' >{classes.name}</div>
                                    </a>
                                    <div class='map'>
                                        <div>
                                            <div><a href={classes.location}><FaMap size='15'color='#04BFBF'/></a></div>
                                            <div>Map</div>
                                        </div>
                                    </div>
                                </div>

                                    <a href={"/class/"+classes.id} >
                                    <div class='type'>
                                        {classes.address}
                                    </div>
                                        <Divider/>
                                    <div class='fees' >
                                        <div>Starting Fees  &#8377;{classes.fees}</div>
                                    </div> 
                                    </a>
                            </div>
                            )
                        })
                    }
                    <div style={{height:'30px'}} />    
                </div>
                <Dialog 
                    fullScreen
                    open={this.state.open} 
                    onClose={this.state.handleClose} 
                    TransitionComponent={Transition}
                    style={{top:'20%'}}
                >
                    <div><IconButton onClick={this.handleClose} ><CloseIcon/></IconButton></div>
                    <div style={{display:'flex',width:'100%'}} >
                        <Tabs
                            orientation="vertical"
                            variant="fullWidth"
                            style={{width:'40%'}}
                            onChange={this.handleChangeTabs}
                            value={this.state.value}
                            
                        >
                            <Tab label="Age" {...a11yProps(0)} />
                            <Tab label="Price" {...a11yProps(1)} />
                            <Tab label="Time" {...a11yProps(2)} />
                            <Tab label="Categories" {...a11yProps(3)} />
                        </Tabs>
                        <TabPanel index={0} value={this.state.value} style={{width:'100%'}} >
                            <div style={{padding:'10px',color:'black'}}>Age Of The Student</div>
                            <div style={{padding:'0px 10px',color:'black',fontSize:'18px',marginBottom:'10px'}}>{this.state.ageValue} years</div>
                            <div style={{height:'300px',width:'100%',display:'flex',justifyContent:'space-around'}} >
                                <Slider
                                    orientation="vertical"
                                    defaultValue={20}
                                    valueLabelDisplay="on"
                                    aria-labelledby="vertical-slider"
                                    min={5}
                                    max={20}
                                    step={2}
                                    marks={marksAge}
                                    value={this.state.ageValue}
                                    onChange={this.handleSliderAge}
                                    />
                            </div>
                        </TabPanel>
                        <TabPanel index={1} value={this.state.value} style={{width:'100%'}} >
                            <div style={{padding:'10px',color:'black'}}>Fees</div>
                            <div style={{padding:'0px 10px',color:'black',fontSize:'18px',marginBottom:'10px'}}>&#8377; {this.state.feesValue} /month</div>
                            <div style={{height:'300px',width:'100%',display:'flex',justifyContent:'space-around'}} >
                                <Slider
                                    orientation="vertical"
                                    defaultValue={1000}
                                    aria-labelledby="vertical-slider"
                                    min={0}
                                    max={10000}
                                    marks={marksFees}
                                    step={1000}
                                    value={this.state.feesValue}
                                    onChange={this.handleSliderFees}
                                    />
                            </div>
                        </TabPanel>
                        <TabPanel index={2} value={this.state.value} >
                        <div style={{padding:'10px',color:'black'}}>Timings Of The Classes</div>
                        <div style={{height:'300px',width:'100%',display:'flex',justifyContent:'space-around'}}>
                            <Slider
                                value = {[20,80]}
                                orientation="vertical"
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                marks={marksTime}
                                />
                            </div>
                        </TabPanel>
                        <TabPanel index={3} value={this.state.value} >
                        <div style={{padding:'10px',color:'black'}}>Categories</div>
                            <List dense={true}>
                                {categories.map(item=>{
                                    return <ListItem button >
                                    <ListItemText
                                        primary={item.value}
                                        onClick={()=>{this.setState({search:item.value})}}
                                    />
                                    </ListItem>
                                })}
                            </List>
                        </TabPanel>
                    </div>
                    <dvi style={{position:'fixed',bottom:'0',width:'100%',padding:'20px',display:'flex',justifyContent:'space-around'}} >
                        <Button variant='contained' color='secondary' style={{width:'90%',padding:'10px 0px'}} onClick={this.clearFilter} >Clear All</Button>
                    </dvi>
                </Dialog>
            </div>
        )
    }
}
export default SearchView;
