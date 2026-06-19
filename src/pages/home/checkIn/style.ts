import type { Theme } from '@mui/material/styles'
import type { CSSProperties } from 'react'
import { alpha } from '@mui/material/styles'
import type { AttendanceStatus } from '@/types/attendance.types'
import { ATTENDANCE_STATUS } from '@/constants/attendance.constants'

export const rootStyle = (theme: Theme) => {
  return {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    backgroundColor: theme.palette.orange.main,
    borderRadius: '1rem',
    padding: '1.5rem',
  } as const
}

export const iconStyle = (theme: Theme) => {
  return {
    color: theme.palette.background.paper,
  } as CSSProperties
}

export const containedButtonStyles = (theme: Theme) => {
  return {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.purple.main,
    flex: 1,
    borderRadius: '0.8rem',
    height: '2.3rem',
  } as CSSProperties
}
export const outlinedButtonStyles = (theme: Theme) => {
  return {
    borderColor: theme.palette.background.paper,
    color: theme.palette.background.paper,
    borderRadius: '0.8rem',
    height: '2.3rem',
  } as CSSProperties
}

export const completedButtonStyle = (theme: Theme, attendanceStatus: AttendanceStatus) => {
  const backgroundColor =
    attendanceStatus === ATTENDANCE_STATUS.COMING
      ? theme.palette.success.main
      : theme.palette.error.main

  return {
    gap: '0.5rem',
    backgroundColor,
    color: theme.palette.background.paper,
    width: '100%',
    borderRadius: '0.7rem',
    '&:hover': {
      backgroundColor,
    },
  } as CSSProperties
}

export const detailContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  gap: '0.7rem',
  flexWrap: 'wrap',
} as CSSProperties

export const iconContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  gap: '0.1rem',
  alignItems: 'center',
} as CSSProperties

export const buttonsContainerStyle = {
  display: 'flex',
  gap: '1rem',
  marginTop: '1rem',
  width: '100%',
  alignItems: 'center',
} as CSSProperties

export const warpperTopStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
} as CSSProperties

export const wrapperTimeIconStyle = (theme: Theme, isRtl: boolean) => {
  return {
    position: 'absolute',
    top: -40,
    left: isRtl ? -40 : 255,
    backgroundColor: alpha(theme.palette.background.paper, 0.1),
    height: '8rem',
    width: '8rem',
    borderRadius: '9rem',
  } as CSSProperties
}

export const TimeIconStyle = (theme: Theme, isRtl: boolean) => {
  return {
    position: 'absolute',
    width: '2.5rem',
    height: '2.5rem',
    top: 60,
    left: isRtl ? 60 : 23,
    borderRadius: '0.8rem',
    backgroundColor: alpha(theme.palette.common.white, 0.2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as CSSProperties
}
