const homeReducer = (state = {
  isDrawerOpen: false
}, action) => {
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