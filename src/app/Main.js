import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MyHorizontalStepper from '../containers/horizontalStepper';
import MyDrawer from '../containers/drawer';
import {deepOrange500} from 'material-ui/styles/colors';
import MyAppBar from '../containers/appBar';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 20,
  },
  title: {
    cursor: 'pointer',
  }
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
          <MyAppBar/>
          <MyHorizontalStepper/>
          </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;