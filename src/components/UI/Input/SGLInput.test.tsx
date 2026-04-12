import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { SGLInput } from './SGLInput'

describe('SGLInput', () => {
  it('renders the placeholder text inside the input field', () => {
    render(<SGLInput placeholder="Enter your name" onChange={vi.fn()} />)

    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument()
  })

  it('updates the input value when the user types', () => {
    render(<SGLInput placeholder="Type here" onChange={vi.fn()} />)

    const input = screen.getByPlaceholderText('Type here')

    fireEvent.change(input, { target: { value: 'Sagol 360' } })

    expect(input).toHaveValue('Sagol 360')
  })

  it('triggers onChange with the correct value when typing', () => {
    const handleChange = vi.fn()
    render(<SGLInput placeholder="Type here" onChange={handleChange} />)

    const input = screen.getByPlaceholderText('Type here')

    fireEvent.change(input, { target: { value: 'Updated value' } })

    expect(handleChange).toHaveBeenCalledTimes(1)

    const event = handleChange.mock.calls[0][0]
    expect(event.target.value).toBe('Updated value')
  })
})
