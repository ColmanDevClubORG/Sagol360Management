export interface QRCreateBody {
  userId: string
  password: string
}

export interface QRCreateResponse {
  token: string
}

export interface QRVerifyBody {
  token: string
}

export type QRVerifyResponse = Record<string, unknown>
