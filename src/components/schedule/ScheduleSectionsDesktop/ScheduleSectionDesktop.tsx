import { useTranslation } from 'react-i18next'
import type { Appointment } from '@/components/BottomSheetDialog/types'
import { scheduleStyles } from '@/pages/schedule/styles'
import type { ScheduleSectionItems } from '@/pages/schedule/utils/scheduleUtils'
import { ScheduleCard } from '../ScheduleCard/ScheduleCard'
import { SCHEDULE_SECTION_KEYS } from '@/pages/schedule/utils/scheduleUtils'

interface ScheduleSectionsProps {
  sections: ScheduleSectionItems[]
  onAppointmentClick: (appointment: Appointment) => void
}

export const ScheduleSectionsDesktop = ({
  sections,
  onAppointmentClick,
}: ScheduleSectionsProps) => {
  const { t } = useTranslation()

  const mainSections = sections.filter(
    (section) =>
      section.key === SCHEDULE_SECTION_KEYS.today || section.key === SCHEDULE_SECTION_KEYS.tomorrow,
  )

  const weekSections = sections.filter(
    (section) => section.key === SCHEDULE_SECTION_KEYS.upcomingWeek,
  )

  const renderSections = (sectionsToRender: ScheduleSectionItems[]) =>
    sectionsToRender.map(({ key, labelKey, items }) => {
      if (items.length === 0) return null

      return (
        <div key={key} style={scheduleStyles.sectionMobile}>
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
    })

  return (
    <div style={scheduleStyles.sectionDesktop}>
      <div style={scheduleStyles.sectionMobile}>{renderSections(mainSections)}</div>

      <div style={scheduleStyles.sectionMobile}>{renderSections(weekSections)}</div>
    </div>
  )
}
