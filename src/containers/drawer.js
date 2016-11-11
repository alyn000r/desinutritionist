import { connect } from 'react-redux';
import { default as Component} from '../components/drawer';
import { toggleDrawer } from '../actions/actions';

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    isDrawerOpen: ownProps.isDrawerOpen
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...dispatch
  }
}

const MyDrawer = connect(mapStateToProps, mapDispatchToProps)(Component)

export default MyDrawer