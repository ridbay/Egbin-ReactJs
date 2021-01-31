import React from 'react';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import StaffDashboard from './pages/staff/Dashboard';
import AdminDashboard from './pages/admin/Dashboard';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

// declare the theme
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#6746c3',
      main: '#673ab7',
      dark: '#000063',
      contrastText: '#fff',
    },
    secondary: {
      light: '#bc477b',
      main: '#f50057',
      dark: '#560027',
      contrastText: '#fff'
    }
  }
})

const App = () => {

  
  return (
    <MuiThemeProvider theme={theme}>
      <div className='App'>
        <CssBaseline />

        <Router>
          <div className='container'>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signin" component={SignIn}/>
              <Route exact path="/signup" component={SignUp} />
              <Route path="/staff" component={StaffDashboard} />
              <Route path="/admin" component={AdminDashboard} />
            </Switch>
          </div>
        </Router>

      </div>

    </MuiThemeProvider>

  );
}

//Export the app
export default App;
