import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


export default class MyAppBar extends  React.Component {

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

    const styles = {
      title: {
        cursor: 'pointer'
      }
    };

    return (
      <AppBar
        title={<span style={styles.title}>Meal Plan For Today</span>}
        iconElementRight={<FlatButton label="Refresh" />}
        onLeftIconButtonTouchTap={this.onToggleDrawer()}
      />
    )
  }
}

MyAppBar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired
}