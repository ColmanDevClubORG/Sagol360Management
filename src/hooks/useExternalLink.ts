import { useCallback } from 'react'

export const useExternalLink = () => {
  const openLink = useCallback((url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }, [])

  return openLink
}
