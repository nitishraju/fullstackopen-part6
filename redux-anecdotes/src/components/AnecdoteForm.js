import React from 'react'
import { useDispatch } from 'react-redux'
import { addToAnecdotes } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(addToAnecdotes(anecdote))
  }

  return (
  <form onSubmit={addAnecdote}>
    <div><input name="anecdote" /></div>
    <button type="submit">create</button>
  </form>
  )
}

export default AnecdoteForm