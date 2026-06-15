const tokenStore = new Map<string, string>()

export const createToken = (userId: string): string => {
  const token = crypto.randomUUID()
  tokenStore.set(token, userId)
  return token
}

export const verifyToken = async (token: string): Promise<{ userId: string }> => {
  const userId = tokenStore.get(token)
  tokenStore.delete(token)
  if (!userId) {
    throw new Error('invalid token')
  }
  return { userId }
}
