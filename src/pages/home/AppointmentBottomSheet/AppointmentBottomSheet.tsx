import { useQuery } from '@tanstack/react-query'
import { BottomSheetDialog } from '@/components/BottomSheetDialog/BottomSheetDialog'
import { apiService } from '@/services/api/api.service'
import { useState } from 'react'
import type { Appointment } from '@/components/BottomSheetDialog/types'
import { API_ENDPOINTS } from '@/constants/api.constants'

export const AppointmentBottomSheet = () => {
  const [selectedAppointment, setSelectedAppointment] = useState<boolean>(true)

  const patientID = '1622017'
  const date = '07-06-2026' // Mock data

  const { data: appointment } = useQuery({
    queryKey: ['nextAppointment', patientID, date],
    queryFn: async () => {
      const response = await apiService.get<Appointment>(API_ENDPOINTS.appointment, {
        params: {
          patientID,
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
