// input - search ghUser

import React from 'react'
// useSelector to get a specific piece of state
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, setSearch } from '../../actions/ghUserActions'
import Results from '../results/Results'
import Search from '../search/Search'

export const GithubUser = () => {
  const dispatch = useDispatch();

  // state
  const search = useSelector(state => state.search)
  const username = useSelector(state => state.username)
  const followers = useSelector(state => state.followers)
  const following = useSelector(state => state.following)
  const link = useSelector(state => state.link)
  const repos = useSelector(state => state.repos)

  // updates search in state using setSearch
  const handleChange = ({ target }) => {
    dispatch(setSearch({ search: target.value }))
  }

  // handleClick to trigger dispatch
  const handleClick = async () => {
    // start action
    await dispatch(fetchUser(search))
  }

  if (username === '') return (
    <Search
      onChange={handleChange}
      onClick={handleClick}
    />)

  else return (
    // pass props
    <Results
      username={username}
      followers={followers}
      following={following}
      link={link}
      repos={repos}
    />
  )
}
