import { useState } from 'react'
import dayjs from 'dayjs'
import { SGLCalendar } from '../../components/UI/Calendar/SGLCalendar'
import type { Appointment } from '@/components/BottomSheetDialog/types'
import { BottomSheetDialog } from '@/components/BottomSheetDialog/BottomSheetDialog'
import { SGLContainer } from '@/components/UI/Container/SGLContainer'
import { scheduleStyles } from './styles'
import { useTranslation } from 'react-i18next'
import { buildSectionItems, MOCK_SCHEDULE_ITEMS } from './utils/scheduleUtils.ts'
import { ScheduleSections } from '@/components/schedule/ScheduleSections/ScheduleSections.tsx'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography.tsx'
import { formatDisplayDate, formatDisplayTime, getScheduleDateRange } from '@/utils/datesUtils.tsx'

export const Schedule = () => {
  const { t } = useTranslation()
  const calendarDate = dayjs()
  const now = new Date()
  const [selectedDate, setSelectedDate] = useState(calendarDate)
  const [activeAppointment, setActiveAppointment] = useState<Appointment | undefined>()
  const { todayStart, tomorrowStart, dayAfterTomorrowStart, nextWeekEnd } =
    getScheduleDateRange(now)

  const sectionItems = buildSectionItems(
    MOCK_SCHEDULE_ITEMS,
    todayStart,
    tomorrowStart,
    dayAfterTomorrowStart,
    nextWeekEnd,
  )
  const hasAppointments =
    sectionItems.today.length > 0 ||
    sectionItems.tomorrow.length > 0 ||
    sectionItems.upcomingWeek.length > 0

  return (
    <SGLContainer styles={scheduleStyles.container}>
      <SGLCalendar selectedDate={selectedDate} onDateChange={setSelectedDate} />
      <ScheduleSections sections={sectionItems} onAppointmentClick={setActiveAppointment} />
      {!hasAppointments && <div>{t('schedule.noAppointments')}</div>}
      {activeAppointment && (
        <BottomSheetDialog
          isOpen={!!activeAppointment}
          appointment={activeAppointment}
          onClose={() => setActiveAppointment(undefined)}
        />
      )}
      <SGLTypography variant="mediumText" styles={scheduleStyles.pageUpdate}>
        {t('schedule.updatedAt', {
          date: formatDisplayDate(now),
          time: formatDisplayTime(now),
        })}
      </SGLTypography>
    </SGLContainer>
  )
}
