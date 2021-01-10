import anecdoteService from '../services/anecdotes'

export const asObject = (content) => {
  return {
    content,
    id: `${Math.floor(Math.random() * 100000)}`,
    votes: 0
  }
}

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_CONTENT':
      return action.data.content
    case 'VOTE':
      const newArray = state.map(anecdote => 
        anecdote.id !== action.data.id 
          ? anecdote 
          : {...anecdote, votes: anecdote.votes + 1} 
      )
      return newArray
    case 'ADD_ANECDOTE':
      const newAnecdote = action.data.content
      return state.concat(asObject(newAnecdote))
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

export const voteFor = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const addToAnecdotes = (anecdote) => {
  return {
    type: 'ADD_ANECDOTE',
    data: {
      content: anecdote
    }
  }
}

export default anecdoteReducer