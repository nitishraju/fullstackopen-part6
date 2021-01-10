import anecdoteService from '../services/anecdotes'

export const asObject = (content) => {
  return {
    content,
    votes: 0
  }
}

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_CONTENT':
      return action.data.content
    case 'VOTE':
      const newState = state.map(anecdote => 
        anecdote.id !== action.data.content.id 
          ? anecdote 
          : action.data.content
      )
      return newState
    case 'ADD_ANECDOTE':
      const newAnecdote = action.data.content
      return state.concat(newAnecdote)
    default:
      return state
  }
}

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const content = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_CONTENT',
      data: { content }
    })
  }
}

export const voteFor = (anecdoteObj) => {
  return async (dispatch) => {
    const incrementedObj = await anecdoteService.incrementVote(anecdoteObj)
    dispatch({
      type: 'VOTE',
      data: { content: incrementedObj }
    })
  }
}

export const addToAnecdotes = (anecdote) => {
  return async (dispatch) => {
    const anecdoteObj = await anecdoteService.createAnecdote(anecdote)
    dispatch({
      type: 'ADD_ANECDOTE',
      data: {
        content: anecdoteObj
      }
    })
  }
}

export default anecdoteReducer