import React from 'react'
import PropTypes from 'prop-types'

const Results = ({ username, followers, following, link, repos }) => {
  return (
    <div>
      <h2>User: {username} </h2>
      <p>Followers: {followers}</p>
      <p>Following: {following}</p>
      <p>Github Link: <a href={link} target="_blank">Profile Link</a></p>
      <div>Repos: {JSON.stringify(repos)}</div>
    </div>
  )
}

Results.propTypes = {
  username: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  repos: PropTypes.array.isRequired,
}

export default Results
