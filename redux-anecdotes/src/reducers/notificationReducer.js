const notificationReducer = (state = '', action) => {
  console.log('action', action)
  switch (action.type) {
    case 'ADDED':
      return `Added: ${action.data.content}`
    case 'VOTED':
      return `Voted: ${action.data.content}`
    case 'RESET':
      return null 
    default:
      return state
  }
}

export const setAddedMessage = (content) => {
  return {
    type: 'ADDED',
    data: { content }
  }
}

export const setVotedMessage = (content) => {
  return {
    type: 'VOTED',
    data: { content }
  }
}

export const resetMessage = () => {
  return {
    type: 'RESET'
  }
}

export default notificationReducer