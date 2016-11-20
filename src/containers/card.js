import { connect } from 'react-redux';
import { default as Component} from '../components/card';

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayRecipe: () => {
      dispatch({
        type: 'DISPLAY_RECIPE'
      });
    }
  }
};

const MyCard = connect(mapStateToProps, mapDispatchToProps)(Component);

export default MyCard