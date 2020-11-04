// input - search ghUser

import React from 'react'
// useSelector to get a specific piece of state
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, setSearch } from '../../../actions/ghUserActions'

export const GithubUser = () => {
  const dispatch = useDispatch();
  // get user search from state
  const search = useSelector(state => state.search)

  const handleChange = ({ target }) => {
    dispatch(setSearch({ search: target.value }))
  }

  // handleClick to trigger dispatch
  const handleClick = async () => {
    console.log('GithubUser click')

    // start action
    await dispatch(fetchUser(search))

  }

  return (
    <div>
      <label htmlFor="ghUser">Search</label>
      <input
        id="ghUser"
        type="text"
        name="ghUser"
        onChange={handleChange}
      />

      <button onClick={handleClick}>Go!</button>
    </div>
  )
}
