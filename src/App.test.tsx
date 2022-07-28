import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App Component should', () => {
  it('have a Navbar', () => {
    const { getByRole } = render(<App />)
    expect(getByRole('navigation')).toBeInTheDocument()
  })
})
