import { render } from '@testing-library/react'
import { Dummy } from './dummy'

test('demo', () => {
    expect(true).toBe(true)
})

test('Renders the main page', () => {
    render(<Dummy />)
    expect(true).toBeTruthy()
})
