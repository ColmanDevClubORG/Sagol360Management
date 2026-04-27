import { addDays, addMonths, formatIsoDate } from '@/utils/datesUtils'
import type { Slot } from './SlotSelection'

const getMockSlotDate = (daysFromBaseDate: number) =>
  formatIsoDate(addDays(addMonths(new Date(), 2), daysFromBaseDate))

export const MOCK_SLOTS: Slot[] = [
  {
    date: getMockSlotDate(0),
    time: '15:00:00',
    chamber: 'appointment.chamber.hyperbaric',
    availableSpots: 8,
  },
  {
    date: getMockSlotDate(0),
    time: '17:30:00',
    chamber: 'appointment.chamber.hyperbaric',
    availableSpots: 11,
  },
  {
    date: getMockSlotDate(0),
    time: '20:00:00',
    chamber: 'appointment.chamber.hyperbaric',
    availableSpots: 13,
  },
  {
    date: getMockSlotDate(7),
    time: '13:00:00',
    chamber: 'appointment.chamber.hyperbaric',
    availableSpots: 11,
  },
  {
    date: getMockSlotDate(14),
    time: '17:30:00',
    chamber: 'appointment.chamber.hyperbaric',
    availableSpots: 12,
  },
  {
    date: getMockSlotDate(14),
    time: '20:00:00',
    chamber: 'appointment.chamber.hyperbaric',
    availableSpots: 13,
  },
]
