import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from './Navbar'

describe('Navbar should', () => {
  it('Contain a main heading MOONBASE', () => {
    const { getByRole } = render(<Navbar />)
    expect(getByRole('heading').textContent).toBe('MOONBASE')
  })

  it('Contains the required links', () => {
    const { getByText } = render(<Navbar />)
    const navItems = ['Home', 'Shop', 'About', 'Cart']

    for (const navItem of navItems) {
      expect(getByText(navItem)).toBeInTheDocument()
    }
  })
})
