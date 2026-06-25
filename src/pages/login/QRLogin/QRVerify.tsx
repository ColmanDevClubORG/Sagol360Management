import { useTranslation } from 'react-i18next'
import { Navigate, useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { verifyQR } from '@/services/QR/QR.service.ts'

export const QRVerify = () => {
  const { t } = useTranslation()
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')

  const { isError, isPending, isSuccess } = useQuery({
    queryKey: ['verifyQR', token],
    queryFn: () => verifyQR({ token: token ?? '' }),
    enabled: Boolean(token),
    refetchOnWindowFocus: false,
    retry: false,
  })

  if (!token) {
    return <SGLTypography>{t('qrVerify.missingToken')}</SGLTypography>
  }

  if (isError) {
    return <SGLTypography>{t('qrVerify.verifyError')}</SGLTypography>
  }

  if (isPending) {
    return <SGLTypography>{t('qrVerify.verifying')}</SGLTypography>
  }

  if (isSuccess) {
    return <Navigate to="/home" replace />
  }

  return null
}
