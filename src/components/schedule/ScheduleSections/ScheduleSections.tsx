import { useTranslation } from 'react-i18next'
import type { Appointment } from '@/components/BottomSheetDialog/types'
import { scheduleStyles } from '@/pages/schedule/styles'
import { SECTION_LABEL_KEYS, type ScheduleSectionKey } from '@/pages/schedule/utils/scheduleUtils'
import { ScheduleCard } from '../ScheduleCard/ScheduleCard'

interface ScheduleSectionsProps {
  sections: Record<ScheduleSectionKey, Appointment[]>
  onAppointmentClick: (appointment: Appointment) => void
}

export const ScheduleSections = ({ sections, onAppointmentClick }: ScheduleSectionsProps) => {
  const { t } = useTranslation()

  return (
    <>
      {(Object.keys(sections) as ScheduleSectionKey[]).map((sectionKey) => {
        const items = sections[sectionKey]
        if (items.length === 0) return null
        return (
          <div key={sectionKey} style={scheduleStyles.section}>
            <div style={scheduleStyles.sectionTitle}>{t(SECTION_LABEL_KEYS[sectionKey])}</div>

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
