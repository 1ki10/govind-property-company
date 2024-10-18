import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { name: /Welcome to Govind Property/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<Home />)
    const tagline = screen.getByText(/Your Lifestyle, Our Priority/i)
    expect(tagline).toBeInTheDocument()
  })
})