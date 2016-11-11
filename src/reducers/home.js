const initialState = {
  isDrawerOpen: false
}

const homeReducer = (state = {initialState}, action) => {
  switch (action.type) {
    case 'TOGGLE_DRAWER':
      return Object.assign ({}, state, {
        isDrawerOpen: !state.isDrawerOpen
      })
    default:
      return state
  }
}

export default homeReducer;