import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Warning from '@material-ui/icons/Warning';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class UserListItem extends React.Component {

  constructor(props) {
      super(props);
  }
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;

    return (
      <List
        component="nav"

        className={classes.root}
      >
      
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText inset primary={this.props.name} />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            {this.props.prefs.map(x => 
            <ListItem key = {x} button className={classes.nested}>
              <ListItemIcon>
                <Warning />
              </ListItemIcon>
              <ListItemText inset primary={x} />
            </ListItem>)}
          </List>
        </Collapse>
      </List>
    );
  }
}

UserListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserListItem);