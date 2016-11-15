import { connect } from 'react-redux';
import { default as Component} from '../components/horizontalStepper';


const mapStateToProps = (state) => {
  return {
    finished: state.homeReducer.finished,
    stepIndex: state.homeReducer.stepIndex,
    setup: state.homeReducer.setup
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlePrev: () => {
      dispatch({
        type: 'DECREASE_STEP_INDEX'
      });
    },
    handleNext: () => {
      dispatch({
        type: 'INCREASE_STEP_INDEX'
      });
    },
    handleFinish: () => {
      dispatch({
        type: 'FINISH_SETUP'
      });
    }
  }
};

const MyHorizontalStepper = connect(mapStateToProps, mapDispatchToProps)(Component);

export default MyHorizontalStepper
