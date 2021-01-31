import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import ProfileMenu from '../../components/ProfileMenu';
import AdminNavbar from '../../components/AdminNavbar';
import AdminDrawer from '../../components/AdminDrawer';

import SwitchRoutes from './switchRoutes'

import  USERS_DATA from '../../util/userData'


const drawerWidth = 260;

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

const container = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh"
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch"
  },
  content: {
    marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)"
  },
  container,
  map: {
    marginTop: "70px"
  }
}));


const Dashboard = () => {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = React.useState(USERS_DATA);
  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleProfileMenuOpen = event => {
    
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  }; 
 
  return (
    
    <div className={classes.root}>
      <CssBaseline />
      <AdminNavbar handleDrawerOpen={handleDrawerOpen} handleProfileMenuOpen={handleProfileMenuOpen} open={open} state={state}/>
      <ProfileMenu isMenuOpen={isMenuOpen} handleProfileMenuClose={handleProfileMenuClose} anchorEl={anchorEl} state={state}/>
      <AdminDrawer open={open} handleDrawerClose={handleDrawerClose} />
      {/* <div className={classes.container}>{switchRoutes}</div> */}
      <SwitchRoutes state={state}/>
    </div>
  );
}
export default Dashboard;