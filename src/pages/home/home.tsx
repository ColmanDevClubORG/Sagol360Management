import { useState } from 'react'
import { ProgressCard } from '@/pages/home/progress/ProgressCard'
import { BottomSheetDialog } from '@/components/BottomSheetDialog/BottomSheetDialog'
import type { Appointment } from '@/components/BottomSheetDialog/types'

export const Home = () => {
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | undefined>({
    id: '1',
    title: 'טיפול בתא לחץ',
    time: '00:07',
    durationMinutes: 120,
    location: 'תא כתום • בניין אריסון',
    type: 'hyperbaric_chamber',
  })
  return (
    <>
      <ProgressCard value={10} />
      <BottomSheetDialog
        appointment={selectedAppointment}
        isOpen={!!selectedAppointment}
        onClose={() => setSelectedAppointment(undefined)}
      />
    </>
  )
}
