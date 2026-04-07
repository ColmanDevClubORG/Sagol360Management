export interface ScheduleCardMetaProps {
  time: string
  durationMinutes: number
}

export interface ScheduleCardContentProps extends ScheduleCardMetaProps {
  title: string
  location: string
}
