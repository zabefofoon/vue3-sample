import { defineStore } from 'pinia'
import hashTagApi from '../api/hastag.api'
import { HashTag } from '../domain/HashTag'

export const useHashTagStore = defineStore('hashTag', () => {
  const getHashtag = async (hashTagId: number) => {
    const { data } = await hashTagApi.getHashtag(hashTagId)
    return HashTag.of(data)
  }

  return { getHashtag }
})
