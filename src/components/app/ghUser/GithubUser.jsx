// input - search ghUser

import React from 'react'
import getUserInfo from '../../../services/github-api'

export const GithubUser = () => {

  // handleClick to trigger dispatch
  const handleClick = async () => {
    console.log('GithubUser click')

    const user = await getUserInfo()
    await console.log(user)
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
