const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return action.data.message
    case 'RESET':
      return null 
    default:
      return state
  }
}

export const setNotification = (message, duration) => {
  return async (dispatch) => {
    const timeoutID = setTimeout(() => {
      dispatch({
        type: 'RESET'
      })
    }, duration*1000)

    dispatch({
      type: 'SET_MESSAGE',
      data: { message },
      timeoutID
    })
  }
}

export default notificationReducer