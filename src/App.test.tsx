import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('App Component should', () => {
  it('render a Navbar', () => {
    const { getByRole } = render(<App />)
    expect(getByRole('navigation')).toBeInTheDocument()
  })
})
