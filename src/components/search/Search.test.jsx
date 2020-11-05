import React from 'react'
import { render } from '@testing-library/react'
import Search from './Search'

describe('<Search/>', () => {
  it('renders the search bar and go button', () => {
    const { asFragment } = render(<Search
      onChange={() => { }}
      onClick={() => { }}
    />)

    expect(asFragment()).toMatchSnapshot()
  })
})
