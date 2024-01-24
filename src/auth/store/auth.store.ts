import { defineStore } from 'pinia'
import authApi from '../api/auth.api'

export const useAuthStore = defineStore('auth', () => {
  const refreshToken = async () => {
    const { data } = await authApi.refreshToken()
    console.log(data.message)
    return data
  }

  return {
    refreshToken
  }
})
