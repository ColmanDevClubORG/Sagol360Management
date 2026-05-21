import { useMutation, useQuery } from '@tanstack/react-query'
import { API_ENDPOINTS } from '@/constants/api.constants'
import { apiService } from '@/services/api/api.service'

type MetricsPayload = {
  energyLevel: number
  sleepQuality: number
  painLevel: number
  concentration: number
  brainFog: number
  mood: number
}

export const useMetricsReport = () => {
  //TODO: remove hardcoded user and get it from the login
  const PATIENT_ID = '1622017'

  const { data } = useQuery({
    queryKey: ['metrics', 'today', PATIENT_ID],
    queryFn: async () => {
      const response = await apiService.get<boolean>(`${API_ENDPOINTS.metrics}today/${PATIENT_ID}`)
      return response
    },
  })

  const { mutate } = useMutation({
    mutationFn: (metrics: MetricsPayload) =>
      apiService.post(`${API_ENDPOINTS.metrics}${PATIENT_ID}`, metrics),
  })
  return { sentToday: data, submitReport: mutate }
}
