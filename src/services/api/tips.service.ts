import { apiService } from './api.service'

export interface DailyTip {
  title: string
  description: string
}

export const getDailyTip = (): Promise<DailyTip> => {
  return apiService.get<DailyTip>('/tips/daily')
}
