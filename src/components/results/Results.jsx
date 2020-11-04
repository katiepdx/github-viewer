import React from 'react'
import PropTypes from 'prop-types'
import ReactJson from 'react-json-view'
import styles from '../app/App.css'

const Results = ({ username, followers, following, link, repos }) => {
  return (
    <div>
      <section className={styles.userInfoResults}>
        <p>User: {username} </p>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Github: <a href={link} target="_blank"><img src="src/assets/github_icon.png" height="20px" width="20px" /></a></p>
      </section>
      <div><span className={styles.repos}>Repos:</span> <ReactJson src={repos} theme="solarized" /></div>
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
