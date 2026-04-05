export interface ScheduleCardMetaProps {
  time: string
  duration: string
}

export interface ScheduleCardContentProps extends ScheduleCardMetaProps {
  title: string
  location: string
}

export interface ScheduleCardProps extends ScheduleCardContentProps {
  borderColor?: string
  onClick?: () => void
}
