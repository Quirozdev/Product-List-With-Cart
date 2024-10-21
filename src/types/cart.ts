import type Product from './product'

export type Quantity = number

export interface CartItem {
  productId: Product['id']
  quantity: Quantity
}

export default interface Cart {
  cart: {
    [productId: Product['id']]: Quantity
  }
  changeProductQuantity: (productId: Product['id'], quantity?: Quantity) => void
  removeProduct: (productId: Product['id']) => void
  getProductQuantity: (productId: Product['id']) => Quantity
  getTotalProducts: () => Quantity
  isProductInCart: (productId: Product['id']) => boolean
  getCartItems: () => CartItem[]
  clear: () => void
}
