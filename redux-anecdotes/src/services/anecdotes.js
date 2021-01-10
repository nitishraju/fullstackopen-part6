import axios from 'axios'
import { asObject } from '../reducers/anecdoteReducer'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createAnecdote = async (anecdote) => {
  const object = asObject(anecdote)
  const response = await axios.post(baseUrl, object)
  return response.data
}

const incrementVote = async (anecdoteObj) => {
  const incremented = { ...anecdoteObj, votes: anecdoteObj.votes + 1 }
  const id = incremented.id
  await axios.put(`${baseUrl}/${id}`, incremented)
  return incremented
}
 
export default { getAll, createAnecdote, incrementVote }