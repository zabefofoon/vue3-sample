import { jsonClient } from '@/config/api.config'

export default {
  getHashtag: (hashTagId: number) => {
    return jsonClient({
      method: 'get',
      url: `/v3/display2/hashtags/${hashTagId}`
    })
  }
}
