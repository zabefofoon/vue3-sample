export class Product {
  productNo?: number
  productName?: string
  

  constructor(rawProduct: Partial<Product>) {
    Object.assign(this, rawProduct)
  }

  get dimmedMessage() {
    const current = Math.floor(new Date().getTime() / 1000)
    const endAt = Math.floor(new Date('2024-01-23').getTime() / 1000)
    
    if (endAt < current) 
      return '판매 종료된 상품입니다.'

    if (this.product.stockCnt === 0) 
      return '준비된 수량이 모두 <br>소진되었습니다.'
  }

  static of(rawProduct: Partial<Product>) {
    return new Product(rawProduct)
  }

  static map(rawProducts: Partial<Product>[]) {
    return rawProducts.map(Product.of)
  }
}
