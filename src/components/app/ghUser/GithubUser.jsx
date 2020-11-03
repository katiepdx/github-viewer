// input - search ghUser

import React from 'react'

export const GithubUser = () => {

  // handleClick to trigger dispatch
  const handleClick = () => {
    console.log('GithubUser click')
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
