import React from 'react'
import { useDispatch } from 'react-redux'
import { addToAnecdotes } from '../reducers/anecdoteReducer'
import { setAddedMessage, resetMessage } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(addToAnecdotes(anecdote))

    dispatch(setAddedMessage(anecdote))
    setTimeout(() => {
      dispatch(resetMessage())
    }, 5000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm