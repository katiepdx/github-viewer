import reducer from './ghUserReducer'
import { setSearch, setUser } from '../actions/ghUserActions'

describe('tests ghUserReducer', () => {
  it('updates user info in state using SET_USER', () => {
    const state = {
      username: '',
      followers: 0,
      following: 0,
      link: '',
      repos: ''
    }

    // info to update state with
    const action = setUser(
      {
        username: 'github',
        followers: 0,
        following: 0,
        link: 'https://github.com/github',
        repos: 'https://api.github.com/users/github/repos'
      }
    )

    // update state using reducer
    const newState = reducer(state, action)

    expect(newState).toEqual({
      username: 'github',
      followers: 0,
      following: 0,
      link: 'https://github.com/github',
      repos: 'https://api.github.com/users/github/repos'
    })
  })

  it('updates user search in state using SET_SEARCH', () => {
    const state = {
      search: '',
      username: '',
      followers: 0,
      following: 0,
      link: '',
      repos: ''
    }

    // info to update state with
    const action = setSearch(
      { search: 'github' }
    )

    // update state using reducer
    const newState = reducer(state, action)

    expect(newState).toEqual({
      search: 'github',
      username: '',
      followers: 0,
      following: 0,
      link: '',
      repos: ''
    })
  })
})
