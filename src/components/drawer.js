import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class MyDrawer extends  React.Component {

  constructor(props) {
    super(props);
  }

  onToggleDrawer() {
    return () => {
      this.toggleDrawer();
    };
  }

  toggleDrawer() {
    this.props.toggleDrawer();
  }

  render() {
    const { isDrawerOpen } = this.props;
    return (
      <div>
        <Drawer open={isDrawerOpen}>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>Feedback</MenuItem>
          <MenuItem onTouchTap={this.onToggleDrawer()}>Close Menu</MenuItem>
        </Drawer>
      </div>
    )
  }
}

MyDrawer.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};