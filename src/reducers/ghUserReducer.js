// Add test
// import ghUserActions for switch cases 
import { SET_USER } from '../actions/ghUserActions'

// state - username (login), follower count (follower), following count (following), link to profile (html_url), all user repos (repos_url)
const initialState = {
  username: '',
  followers: 0,
  following: 0,
  link: '',
  repos: []
}

// reducer function with different cases
const reducer = ((state = initialState, action) => {
  // switch cases are by ghUserActions type
  switch (action.type) {
    case SET_USER:
      // set state using action payload - res from api
      return {
        username: action.payload.username,
        followers: action.payload.followers,
        following: action.payload.following,
        link: action.payload.link,
        repos: action.payload.repos
      }
    default:
      return state
  }
})

export default reducer
