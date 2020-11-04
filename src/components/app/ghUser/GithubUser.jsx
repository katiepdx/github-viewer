// input - search ghUser

import React from 'react'
// useSelector to get a specific piece of state
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../../actions/ghUserActions'
import { getUserInfo } from '../../../services/github-api'

export const GithubUser = () => {
  const dispatch = useDispatch();

  // handleClick to trigger dispatch
  const handleClick = async () => {
    console.log('GithubUser click')

    // start action
    await dispatch(fetchUser())

  }

  return (
    <div>
      <label htmlFor="ghUser">Search</label>
      <input
        id="ghUser"
        type="text"
        name="ghUser"
        onChange={() => { }}
      />

      <button onClick={handleClick}>Go!</button>
    </div>
  )
}
