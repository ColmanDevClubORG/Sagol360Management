import { ProgressCard } from '@/pages/home/progress/ProgressCard'
import { SGLBadge } from '@/components/UI/Badge/Badge'
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
