import { BadgeContainer, BadgeText } from './styles'

interface BadgeProps {
  text: string
  color?: string
}

export const Badge = ({ text, color = 'primary.main' }: BadgeProps) => {
  return (
    <BadgeContainer bgColor={color}>
      <BadgeText>{text}</BadgeText>
    </BadgeContainer>
  )
}
