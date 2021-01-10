import React from 'react'
import { connect } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const unsortedAnecdotes = props.anecdotes
  const sortByVotes = (elem1, elem2) => { return elem2.votes - elem1.votes }
  const anecdotes = unsortedAnecdotes.sort(sortByVotes)

  const vote = (anecdote) => {
    props.voteFor(anecdote)
    props.setNotification(`Voted for: ${anecdote.content}`, 5)
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

const mapStateToProps = (state) => {
  let returnObj = {
    filter: state.filter,
    message: state.message
  }

  if (state.filter === '') {
    returnObj = { ...returnObj, anecdotes: state.anecdotes }
  }
  else {
    const filteredAnecdotes = state.anecdotes.filter(anecdote => anecdote.content.toUpperCase().includes(state.filter.toUpperCase()))
    returnObj = { ...returnObj, anecdotes: filteredAnecdotes }
  }

  return returnObj
}

const mapDispatchToProps = {
  voteFor,
  setNotification
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(AnecdoteList)