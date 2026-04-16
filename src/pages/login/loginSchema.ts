import { z } from 'zod'

export const createLoginSchema = (t: (key: string) => string) => {
  return z.object({
    serializedNumber: z
      .string()
      .min(1, t('login.errors.requiredId'))
      .regex(/^\d+$/, t('login.errors.numbersOnly'))
      .min(9, t('login.errors.length9'))
      .max(9, t('login.errors.length9')),
  })
}

export type LoginFormSchema = z.infer<ReturnType<typeof createLoginSchema>>
