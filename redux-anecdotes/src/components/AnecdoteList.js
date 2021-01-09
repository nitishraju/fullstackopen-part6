import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const unsortedAnecdotes = useSelector(state => state)
  const sortByVotes = (elem1, elem2) => { return elem2.votes - elem1.votes }
  const anecdotes = unsortedAnecdotes.sort(sortByVotes)

  const vote = (id) => {
    dispatch(voteFor(id))
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
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList