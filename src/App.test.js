import { render, screen } from '@testing-library/react'
import App from './App'

test('renders Almost before we knew', () => {
    render(<App />)
    const linkElement = screen.getByText(/Almost before we knew/i)
    expect(linkElement).toBeInTheDocument()
})
