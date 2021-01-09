import React from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import { useSelector, useDispatch } from 'react-redux'
import { voteFor } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()

  const unsortedAnecdotes = useSelector(state => state)
  const sortByVotes = (elem1, elem2) => { return elem2.votes - elem1.votes }
  const anecdotes = unsortedAnecdotes.sort(sortByVotes)

  const vote = (id) => {
    dispatch(voteFor(id))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
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
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  )
}

export default App