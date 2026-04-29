import { describe, expect, it } from 'vitest'
import { formatShortDisplayDate, IsoDateStringSchema, parseIsoDate } from './datesUtils'

const validIsoDate = '2024-02-29'
const invalidIsoDateFormat = '2024-2-29'
const invalidNonExistentDate = '2024-02-30' // February has no 30th day

describe('IsoDateStringSchema', () => {
  it('validates ISO date strings', () => {
    expect(IsoDateStringSchema.safeParse(validIsoDate).success).toBe(true)
    expect(IsoDateStringSchema.safeParse(invalidIsoDateFormat).success).toBe(false)
    expect(IsoDateStringSchema.safeParse(invalidNonExistentDate).success).toBe(false)
  })
})

describe('formatShortDisplayDate', () => {
  it('formats valid ISO dates and keeps invalid values unchanged', () => {
    expect(formatShortDisplayDate(validIsoDate)).toBe('29/02')
    expect(formatShortDisplayDate(invalidNonExistentDate)).toBe(invalidNonExistentDate)
  })
})

describe('parseIsoDate', () => {
  it('parses valid ISO dates and rejects invalid dates', () => {
    const parsedDate = parseIsoDate(validIsoDate)

    expect(parsedDate?.getFullYear()).toBe(2024)
    expect(parsedDate?.getMonth()).toBe(1)
    expect(parsedDate?.getDate()).toBe(29)
    expect(parseIsoDate(invalidNonExistentDate)).toBeNull()
  })
})
