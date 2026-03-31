import { DesktopProgressCard } from './DesktopProgressCard'
import { MobileProgressCard } from './MobileProgressCard'
import { useIsMobile } from '@/hooks/useIsMobile'

interface ProgressCardProps {
  value: number
}

export const ProgressCard = ({ value }: ProgressCardProps) => {
  if (useIsMobile()) {
    return <MobileProgressCard value={value} />
  }
  return <DesktopProgressCard value={value} />
}
