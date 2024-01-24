export class HashTag {
  
  /** 해시태그 이름 */
    hashtagName?: string
  /** 어떤 타입으로 표시할건지 */
  hashtagDisplayMethod?: string
  /** 설명 */
  explainText?: string
  /** 해시태그의 상품 목록 */
  productNos?: number[]

  constructor(rawHashTag: Partial<HashTag>) {
    Object.assign(this, rawHashTag)
  }

  static of(rawHashTag: Partial<HashTag>) {
    return new HashTag(rawHashTag)
  }
}
