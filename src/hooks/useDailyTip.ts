import { useEffect, useState } from 'react'
import { getDailyTip, type DailyTip } from '@/services/api/tips.service'

export const useDailyTip = () => {
  const [tip, setTip] = useState<DailyTip | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getDailyTip()
      .then(setTip)
      .catch(() => setError('error'))
      .finally(() => setIsLoading(false))
  }, [])

  return { tip, isLoading, error }
}
