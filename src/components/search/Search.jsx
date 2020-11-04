import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ onChange, onClick }) => {
  return (
    <>
      <div>
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
