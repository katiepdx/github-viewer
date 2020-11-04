import reducer from './ghUserReducer'
import { setUser } from '../actions/ghUserActions'

describe('tests ghUserReducer', () => {
  it('updates user info in state using SET_USER', () => {
    const state = {
      username: '',
      followers: 0,
      following: 0,
      link: '',
      repos: []
    }

    // info to update state with
    const action = setUser(
      {
        username: 'KatiePDX',
        followers: 8,
        following: 8,
        link: 'https://github.com/katiepdx',
        repos: []
      }
    )

    // update state using reducer
    const newState = reducer(state, action)

    expect(newState).toEqual({
      username: 'KatiePDX',
      followers: 8,
      following: 8,
      link: 'https://github.com/katiepdx',
      repos: []
    })
  })
})
