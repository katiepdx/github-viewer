import React from 'react'
import PropTypes from 'prop-types'
import styles from '../app/App.css'

const Search = ({ onChange, onClick }) => {
  return (
    <>
      <div className={styles.searchBar}>
        <label htmlFor="ghUser">Search</label>
        <input
          id="ghUser"
          type="text"
          name="ghUser"
          onChange={onChange}
        />

        <button onClick={onClick}>Go!</button>
      </div>
    </>
  )
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Search
