import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  
  title: {
    flexGrow: 1,
  },
  

}));

export default function Title(props) {
  const classes = useStyles();
  return (
    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};