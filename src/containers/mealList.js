import { connect } from 'react-redux';
import { default as Component} from '../components/mealList';

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

const MyMealList = connect(mapStateToProps, mapDispatchToProps)(Component);

export default MyMealList