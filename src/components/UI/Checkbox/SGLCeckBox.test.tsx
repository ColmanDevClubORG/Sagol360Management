import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { SGLCheckbox } from './SGLCheckbox'

describe('SGLCheckbox', () => {
  //tests for the checkbox!!
  // test 1:
  it('should toggle from checked to unchecked', () => {
    render(<SGLCheckbox defaultChecked={true} />)

    const checkbox = screen.getByRole('checkbox')

    fireEvent.click(checkbox)

    expect(checkbox).not.toBeChecked()
  })
  // test 2:
  it('should toggle from  unchecked to checked ', () => {
    render(<SGLCheckbox defaultChecked={false} />)

    const checkbox = screen.getByRole('checkbox')

    fireEvent.click(checkbox)

    expect(checkbox).toBeChecked()
  })
  // test 3:
  it('should be disabled ', () => {
    render(<SGLCheckbox disabled />)

    const checkbox = screen.getByRole('checkbox')

    expect(checkbox).toBeDisabled()
  })
  //test 4:
  it('should change on onChange', () => {
    const HandleOnChange = vi.fn()

    render(<SGLCheckbox onChange={HandleOnChange} />)

    const checkbox = screen.getByRole('checkbox')

    expect(checkbox).not.toBeChecked()
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
    expect(HandleOnChange).toHaveBeenCalledTimes(1)
  })
})
