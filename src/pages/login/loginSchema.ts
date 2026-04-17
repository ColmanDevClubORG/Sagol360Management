import { z } from 'zod'
import { idValidationSchema } from '@/utils/validation'

export const createLoginSchema = (t: (key: string) => string) => {
  return z.object({
    serializedNumber: idValidationSchema(t),
  })
}

export type LoginFormSchema = z.infer<ReturnType<typeof createLoginSchema>>
