import { useTranslation } from 'react-i18next'
import type { Appointment } from '@/components/BottomSheetDialog/types'
import { scheduleStyles } from '@/pages/schedule/styles'
import type { ScheduleSectionItems } from '@/pages/schedule/utils/scheduleUtils'
import { ScheduleCard } from '../ScheduleCard/ScheduleCard'

interface ScheduleSectionsProps {
  sections: ScheduleSectionItems[]
  onAppointmentClick: (appointment: Appointment) => void
}

export const ScheduleSections = ({ sections, onAppointmentClick }: ScheduleSectionsProps) => {
  const { t } = useTranslation()

  return (
    <>
      {sections.map(({ key, labelKey, items }) => {
        if (items.length === 0) return null

        return (
          <div key={key} style={scheduleStyles.section}>
            <div style={scheduleStyles.sectionTitle}>{t(labelKey)}</div>

            {items.map((item) => (
              <ScheduleCard
                key={item.appointmentId}
                {...item}
                onClick={() => onAppointmentClick(item)}
              />
            ))}
          </div>
        )
      })}
    </>
  )
}
