import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class MyDrawer extends  React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { isDrawerOpen } = this.props;
    return (
      <div>
        <Drawer open={isDrawerOpen}>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>Feedback</MenuItem>
        </Drawer>
      </div>
    )
  }
}

MyDrawer.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired
}