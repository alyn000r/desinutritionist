import { connect } from 'react-redux';
import { default as Component} from '../components/recipe';

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

const Recipe = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Recipe