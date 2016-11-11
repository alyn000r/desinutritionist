import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import HorizontalLinearStepper from '../components/horizontalStepper';
import FlatButton from 'material-ui/FlatButton';
import MyDrawer from '../containers/drawer';
import {deepOrange500} from 'material-ui/styles/colors';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 20,
  },
  title: {
    cursor: 'pointer',
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {

  constructor(props, context) {
    super(props, context);
  }


  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <MyDrawer/>
          <AppBar
            title={<span style={styles.title}>Meal Plan For Today</span>}
            iconElementRight={<FlatButton label="Refresh" onTouchTap={this.refreshAllFoods} />}
          />
          <HorizontalLinearStepper />
          </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;