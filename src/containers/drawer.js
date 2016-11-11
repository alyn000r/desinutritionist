import { connect } from 'react-redux';
import { default as Component} from '../components/drawer';
import { toggleDrawer } from '../actions/actions';

const mapStateToProps = (state, ownProps) => {
  return {
    isDrawerOpen: state.homeReducer.isDrawerOpen
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

const MyDrawer = connect(mapStateToProps, mapDispatchToProps)(Component)

export default MyDrawer