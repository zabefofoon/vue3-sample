import { jsonClient } from "@/config/api.config"

export default {
    getProducts: (productIds: number[]) => {
        return jsonClient({
            method: 'get',
            url: `/v3/display/products/${productIds.join(',')}`,
        })
    }
}