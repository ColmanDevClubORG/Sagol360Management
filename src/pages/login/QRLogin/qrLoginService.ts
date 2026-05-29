//TODO: need to impliment the real call for the api service

const tokenStore = new Map<string, string>()

//POST /api/login/QR/create
export const createToken = (userId: string): string => {
  const token = crypto.randomUUID()
  tokenStore.set(token, userId)
  return token
}

//POST /api/login/QR/verify
export const verifyToken = (token: string): { userId: string } => {
  const userId = tokenStore.get(token)
  if (!userId) {
    throw new Error('invalid token')
  }
  return { userId }
}
