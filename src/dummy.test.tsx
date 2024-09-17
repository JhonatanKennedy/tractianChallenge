import { render } from '@testing-library/react'
import { Test } from './dummy'

test('demo', () => {
    expect(true).toBe(true)
})

test('Renders the main page', () => {
    render(<Test />)
    expect(true).toBeTruthy()
})
