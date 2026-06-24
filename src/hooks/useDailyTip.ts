import { useQuery } from '@tanstack/react-query'
import { API_ENDPOINTS } from '@/constants/api.constants'
import { apiService } from '@/services/api/api.service'
import type { DailyTip } from '@/services/api/tips.service'

export const useDailyTip = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['dailyTip'],
    queryFn: () => apiService.get<DailyTip>(API_ENDPOINTS.tips),
  })

  return { tip: data, isLoading, error }
}
