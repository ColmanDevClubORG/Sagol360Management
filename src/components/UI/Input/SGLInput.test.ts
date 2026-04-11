import { createElement, useState, type ChangeEvent } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { SGLInput } from './SGLInput'

const ControlledInput = () => {
  const [value, setValue] = useState('')

  return createElement(SGLInput, {
    placeholder: 'Type here',
    value,
    onChange: (event) => {
      setValue(event.target.value)
    },
  })
}

describe('SGLInput', () => {
  it('renders the placeholder text inside the input field', () => {
    render(
      createElement(SGLInput, {
        placeholder: 'Enter your name',
        value: '',
        onChange: vi.fn(),
      }),
    )

    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument()
  })

  it('updates the input value when the user types', () => {
    render(createElement(ControlledInput))

    const input = screen.getByPlaceholderText('Type here')

    fireEvent.change(input, { target: { value: 'Sagol 360' } })

    expect(input).toHaveValue('Sagol 360')
  })

  it('triggers onChange with the correct value when typing', () => {
    let receivedValue = ''
    const handleChange = vi.fn((event: ChangeEvent<HTMLInputElement>) => {
      receivedValue = event.target.value
    })

    render(
      createElement(SGLInput, {
        placeholder: 'Type here',
        value: '',
        onChange: handleChange,
      }),
    )

    const input = screen.getByPlaceholderText('Type here')

    fireEvent.change(input, { target: { value: 'Updated value' } })

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(receivedValue).toBe('Updated value')
  })
})
