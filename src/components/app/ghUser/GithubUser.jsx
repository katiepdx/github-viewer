// input - search ghUser

import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchUser } from '../../../actions/ghUserActions'
import { getUserInfo } from '../../../services/github-api'

export const GithubUser = () => {
  const dispatch = useDispatch();

  // handleClick to trigger dispatch
  const handleClick = async () => {
    console.log('GithubUser click')

    // start action
    const user = await dispatch(fetchUser())

    await console.log(user, 'STATE')
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
