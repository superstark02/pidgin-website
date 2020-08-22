import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import './tabs.css'
import Logout from './profile/log-out';
import { OnGoingClasses } from './profile/on-going-classes';
import YourPayments from './profile/your-payments';
import LikedClasses from './profile/liked-class';
import Notifications from './profile/notifications';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{width:"100%"}}
    >
      {value === index && (
        <div style={{width:"100%",padding:'20px'}} >
          <Typography>{children}</Typography>
        </div>
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label={<div className="log-items" >On Going Classes</div>} {...a11yProps(0)} />
        <Tab label={<div className="log-items" >Your Payments</div>} {...a11yProps(1)} />
        <Tab label={<div className="log-items" >Liked Classes</div>} {...a11yProps(2)} />
        <Tab label={<div className="log-items" >Notifications</div>} {...a11yProps(3)} />
        <Tab label={<div className="log-items" >List Your Classes</div>} {...a11yProps(4)} />
        <Tab label={<div className="log-items" >Help</div>} {...a11yProps(5)} />
        <Tab label={<div className="log-items" >Log Out</div>} {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <OnGoingClasses/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <YourPayments/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <LikedClasses/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Notifications/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6} >
        <Logout/>
      </TabPanel>
    </div>
  );
}
