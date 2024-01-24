export class Product {
  productNo?: number
  productName?: string
  

  constructor(rawProduct: Partial<Product>) {
    Object.assign(this, rawProduct)
  }

  static of(rawProduct: Partial<Product>) {
    return new Product(rawProduct)
  }

  static map(rawProducts: Partial<Product>[]) {
    return rawProducts.map(Product.of)
  }
}
