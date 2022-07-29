import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../Home'

describe('Home route should', () => {
  it('render on the page', () => {
    render(<Home />)
    expect(screen.getByText('Home')).toBeInTheDocument()
  })
})
