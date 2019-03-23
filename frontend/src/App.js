import React, { Component } from 'react';
import logo from './logo.svg';
import SubmittedList from './components/SubmittedList';
import './App.css';
import IsSubmitted from './components/IsSubmitted';
import PrefSelection from './components/PrefSelection';
import Creatable from 'react-select';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';



const example = [{
  "name": "kalle",
  "prefs": ["No peas", "No gluten"]
},
{
  "name": "kalle2",
  "prefs": ["yes peas", "yes gluten"]
}];


const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2,
    
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;



class App extends Component {


  function
  render() {
    const { classes } = this.props;

    return (

      /*<div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <IsSubmitted isSubmitted={false} />
          </Grid>
          <Grid item xs={12}>
            <SubmittedList users={example} />
          </Grid>
        </Grid>
      </div>

      <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={5}>
          <Paper className={classes.paper}><IsSubmitted isSubmitted={false}/></Paper>
        </Grid>
        <Divider className={classes.divider} />
        <Grid item xs={5}>
          <Paper className={classes.paper}><SubmittedList users={example}/></Paper>
        </Grid>
      </Grid>
    </div>*/

    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={16}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{<IsSubmitted isSubmitted={false} class='img'/>}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={16}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography noWrap>{<SubmittedList users={example}/>}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>


    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
