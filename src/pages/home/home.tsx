import { ProgressCard } from '@/pages/home/progress/ProgressCard'
import { SGLBadge } from '@/components/UI/Badge/Badge'
import { SGLSwitch } from '@/components/UI/SGLSwitch/styles'
import { SGLDivider } from '@/components/UI/Divider/styles'
import { NavContainer, HomeWrapper } from './styles'

export const Home = () => {
  return (
    <HomeWrapper>
      <NavContainer>
        <SGLBadge count={2} />
        <SGLSwitch defaultChecked />
      </NavContainer>

      <SGLDivider />

      <ProgressCard value={10} />
    </HomeWrapper>
  )
}
