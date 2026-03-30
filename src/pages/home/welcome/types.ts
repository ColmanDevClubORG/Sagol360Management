import type { CSSProperties } from '@mui/material'

export interface WelcomeProps {
  userName: string
  notificationCount: number
  onToggleDialog: () => void
  styles?: CSSProperties
}
