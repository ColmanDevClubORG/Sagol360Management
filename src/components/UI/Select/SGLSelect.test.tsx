import { describe, it, expect, afterEach } from 'vitest'
import '@testing-library/jest-dom/vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'

import { SGLSelect } from './SGLSelect'

afterEach(() => {
  cleanup()
})

describe('SGLSelect', () => {
  const options = ['Apple', 'Banana', 'Orange']

  it('should select the relevant item', () => {
    render(<SGLSelect options={options} />)

    const select = screen.getByRole('combobox')

    fireEvent.mouseDown(select)

    const option = screen.getByText('Banana')
    fireEvent.click(option)

    expect(select).toHaveTextContent('Banana')
  })  
  

  it('should not select any item when dropdown is opened and closed', () => {
    render(<SGLSelect options={options} value="" />)

    const select = screen.getByRole('combobox')

    fireEvent.mouseDown(select)
    fireEvent.keyDown(select, { key: 'Escape' })

    expect(select).not.toHaveTextContent('Banana')
  })

  it('should change the selected value when selecting a different option', () => {
  render(<SGLSelect options={options} />)

  const select = screen.getByRole('combobox')

  fireEvent.mouseDown(select)

  const bananaOption = screen.getByText('Banana')
  fireEvent.click(bananaOption)

  expect(select).toHaveTextContent('Banana')

  fireEvent.mouseDown(select)

  const orangeOption = screen.getByText('Orange')
  fireEvent.click(orangeOption)

  expect(select).toHaveTextContent('Orange')
})
})