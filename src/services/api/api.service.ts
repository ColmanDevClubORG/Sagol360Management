import axios, { type AxiosRequestConfig } from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const get = async <TResponse>(url: string, config?: AxiosRequestConfig): Promise<TResponse> => {
  const response = await apiClient.get<TResponse>(url, config)
  return response.data
}

const post = async <TResponse, TBody = unknown>(
  url: string,
  body?: TBody,
  config?: AxiosRequestConfig,
): Promise<TResponse> => {
  const response = await apiClient.post<TResponse>(url, body, config)
  return response.data
}

export const apiService = {
  get,
  post,
}
