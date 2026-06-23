import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'

import { SGLCard } from '../../components/UI/Card/SGLCard'
import { SGLButton } from '../../components/UI/Button/SGLButton'
import { SGLTypography } from '../../components/UI/Typography/SGLTypography'
import { QRGeneration } from '../login/QRLogin/QRGeneration.tsx'

import { createQR } from '@/services/QR/QR.service.ts'

import * as styles from './styles'

const MOCK_PATIENT_NUMBER = '1622017'
const MOCK_PASSWORD = '123456789'

export const PrintQR = () => {
  const { t } = useTranslation()

  const { data, isPending, isError } = useQuery({
    queryKey: ['printQR', MOCK_PATIENT_NUMBER],
    queryFn: () =>
      createQR({
        password: MOCK_PASSWORD,
        userId: MOCK_PATIENT_NUMBER,
      }),
    refetchOnWindowFocus: false,
    retry: false,
  })

  return (
    <div style={styles.pageContainer}>
      <div style={styles.cardContainer}>
        <SGLCard>
          <div style={styles.containerStyle}>
            {isPending && (
              <SGLTypography styles={styles.textStyle}>{t('printQR.loading')}</SGLTypography>
            )}

            {isError && (
              <SGLTypography styles={styles.textStyle}>{t('printQR.createError')}</SGLTypography>
            )}

            {data?.token && <QRGeneration token={data.token} />}

            <SGLTypography styles={styles.textStyle}>{MOCK_PATIENT_NUMBER}</SGLTypography>

            <SGLTypography styles={styles.textStyle}>{MOCK_PASSWORD}</SGLTypography>

            <SGLButton styles={styles.submitButtonContent}>{t('printQR.print')}</SGLButton>
          </div>
        </SGLCard>
      </div>
    </div>
  )
}
