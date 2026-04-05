import { ProgressCard } from '@/pages/home/progress/ProgressCard'
import { SGLBadge } from '@/components/UI/Badge/Badge'
import { SGLSwitch } from '@/components/UI/SGLSwitch/SGLSwitch'
import { NavContainer, HomeWrapper } from './styles'

export const Home = () => {
  return (
    <HomeWrapper>
      <NavContainer>
        <SGLBadge count={2} />
        <SGLSwitch />
      </NavContainer>

      <ProgressCard value={10} />
    </HomeWrapper>
  )
}
