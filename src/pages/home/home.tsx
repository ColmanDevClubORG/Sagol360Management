import { ProgressCard } from '@/pages/home/progress/ProgressCard'
import { SGLBadge } from '@/components/UI/Icons/Badge/SGLBadge'
import { NavContainer, HomeWrapper } from './styles'

export const Home = () => {
  return (
    <HomeWrapper>
      <NavContainer>
        <SGLBadge count={2} />
      </NavContainer>

      <ProgressCard value={10} />
    </HomeWrapper>
  )
}
