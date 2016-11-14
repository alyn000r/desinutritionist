import { connect } from 'react-redux';
import { default as Component} from '../components/appBar';

const mapStateToProps = (state) => {
  return {
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
};

const MyAppBar = connect(mapStateToProps, mapDispatchToProps)(Component);

export default MyAppBar