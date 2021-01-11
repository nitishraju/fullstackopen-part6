const timeoutReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      if (state !== null) {
        clearTimeout(state)
        return action.timeoutID
      }
      return action.timeoutID
    default:
      return state
  }
}

export default timeoutReducer