import { defineStore } from 'pinia'
import productApi from '../api/product.api'
import { Product } from '../domain/Product'

export const useProductStore = defineStore('product', () => {
  const getProducts = async (productIds: number[]) => {
    const { data } = await productApi.getProducts(productIds)
    const result = Array.isArray(data) ? data : [data]
    return Product.map(result)
  }

  return {
    getProducts
  }
})
