import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { SGLButton } from './SGLButton'

describe('SGLButton', () => {
  it('should handle click events', () => {
    const handleClick = vi.fn()

    render(<SGLButton onClick={handleClick}>Click Me</SGLButton>)

    const button = screen.getByRole('button', { name: /click me/i })

    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
