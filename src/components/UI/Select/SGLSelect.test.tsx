import { describe, it, expect, afterEach } from 'vitest'
import '@testing-library/jest-dom/vitest'
import { screen, fireEvent, cleanup } from '@testing-library/react'
import { renderWithTheme } from '../../../tests/renderWithTheme'
import { SGLSelect } from './SGLSelect'

afterEach(() => {
  cleanup()
})

describe('SGLSelect', () => {
  const options = ['Apple', 'Banana', 'Orange']

  it('should select the relevant item', () => {
    renderWithTheme(<SGLSelect options={options} />)

    const select = screen.getByRole('combobox')

    fireEvent.mouseDown(select)

    const option = screen.getByText('Banana')
    fireEvent.click(option)

    expect(select).toHaveTextContent('Banana')
  })

  it('should not select any item when dropdown is opened and closed', () => {
    renderWithTheme(<SGLSelect options={options} value="" />)

    const select = screen.getByRole('combobox')

    fireEvent.mouseDown(select)
    fireEvent.keyDown(select, { key: 'Escape' })

    expect(select).not.toHaveTextContent('Banana')
  })

  it('should change the selected value when selecting a different option', () => {
    renderWithTheme(<SGLSelect options={options} />)

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
