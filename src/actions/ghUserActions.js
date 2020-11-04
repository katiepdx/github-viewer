// import api fetch service
import { getUserInfo } from '../services/github-api'

// SET ACTIONS go here - userJson is the respose from the api
export const SET_USER = 'SET_USER'
export const setUser = userJson => ({
  type: SET_USER,
  payload: userJson
})

// dispatch calls the action
export const fetchUser = () => dispatch => {
  return getUserInfo()
    .then(user => {
      dispatch(setUser(user))
      console.log(user, 'IN ACTIONS FILE')
    })
}
