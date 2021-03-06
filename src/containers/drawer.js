import { connect } from 'react-redux';
import { default as Component} from '../components/drawer';

const mapStateToProps = (state) => {
  return {
    isDrawerOpen: state.homeReducer.isDrawerOpen
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawer: () => {
      dispatch({
        type: 'TOGGLE_DRAWER'
      });
    }
  }
}

const MyDrawer = connect(mapStateToProps, mapDispatchToProps)(Component);

export default MyDrawer