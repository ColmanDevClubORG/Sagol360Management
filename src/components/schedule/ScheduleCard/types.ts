export interface ScheduleCardMetaProps {
  startAt: string
  durationMinutes: number
}

export interface ScheduleCardContentProps extends ScheduleCardMetaProps {
  title: string
  location: string
}
