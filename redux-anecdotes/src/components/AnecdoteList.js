import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { setVotedMessage, resetMessage } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const unsortedAnecdotes = useSelector(state => {
    const anecdotes = state.anecdotes
    const filter = state.filter
    if (filter === '') {
      return anecdotes
    }
    return anecdotes.filter(anecdote => anecdote.content.toUpperCase().includes(filter.toUpperCase()))
  })
  const sortByVotes = (elem1, elem2) => { return elem2.votes - elem1.votes }
  const anecdotes = unsortedAnecdotes.sort(sortByVotes)

  const vote = (anecdote) => {
    dispatch(voteFor(anecdote.id))
    
    dispatch(setVotedMessage(anecdote.content))
    setTimeout(() => {
      dispatch(resetMessage())
    }, 5000)
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList