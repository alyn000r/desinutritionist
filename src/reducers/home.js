const initialState = {
  isDrawerOpen: false,
  finished: false,
  stepIndex: 0,
  setup: getInitialSetup()
};

function getInitialSetup() {
  return {
    age: null,
    weight: null,
    height: null,
    gender: 'male',
    activityLevel: 'sedentary',
    goal: 'lose',
    mealsPerDay: 1,
    vegetarian: 'yes'
  }
}

const homeReducer = (state = initialState , action) => {
  switch (action.type) {
    case 'TOGGLE_DRAWER':
      return Object.assign ({}, state, {
        isDrawerOpen: !state.isDrawerOpen
      });
    case 'INCREASE_STEP_INDEX':
      return Object.assign ({}, state, {
        stepIndex: state.stepIndex + 1
      });
    case 'DECREASE_STEP_INDEX':
      return Object.assign ({}, state, {
        stepIndex: state.stepIndex - 1
      });
    case 'FINISH_SETUP':
      return Object.assign ({}, state, {
        finished: true
      });
    default:
      return state
  }
}

export default homeReducer;