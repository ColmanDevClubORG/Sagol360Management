import { useQuery } from '@tanstack/react-query'
import { BottomSheetDialog } from '@/components/BottomSheetDialog/BottomSheetDialog'
import { apiService } from '@/services/api/api.service'
import { useState } from 'react'
import type { Appointment } from '@/components/BottomSheetDialog/types'
import { API_ENDPOINTS } from '@/constants/api.constants'
import { MOCK_DATA } from '@/constants'

export const AppointmentBottomSheet = () => {
  const [selectedAppointment, setSelectedAppointment] = useState<boolean>(true)

  const patientid = MOCK_DATA.patientID
  const date = MOCK_DATA.date

  const { data: appointment } = useQuery({
    queryKey: ['nextAppointment', patientid, date],
    queryFn: async () => {
      const response = await apiService.get<Appointment>(API_ENDPOINTS.appointment, {
        params: {
          patientid,
          date,
        },
      })
      return response
    },
  })

  const handleCloseBottomSheet = () => {
    setSelectedAppointment(false)
  }

  return (
    <BottomSheetDialog
      appointment={appointment}
      isOpen={selectedAppointment && !!appointment}
      onClose={handleCloseBottomSheet}
    />
  )
}
