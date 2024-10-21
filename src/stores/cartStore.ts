import type { CartItem } from '@/types/cart'
import type Cart from '@/types/cart'
import { ref } from 'vue'

export const cartStore = ref<Cart>({
  cart: {},
  changeProductQuantity(productId, quantity = 1) {
    if (!this.cart[productId]) {
      this.cart[productId] = quantity
    } else {
      this.cart[productId] += quantity
    }

    if (this.cart[productId] <= 0) {
      this.removeProduct(productId)
    }
  },
  removeProduct(productId) {
    delete this.cart[productId]
  },
  getProductQuantity(productId) {
    return this.cart[productId] || 0
  },
  getTotalProducts() {
    return Object.values(this.cart).reduce((acc, curr) => {
      return acc + curr
    }, 0)
  },
  isProductInCart(productId) {
    return !!this.cart[productId]
  },
  getCartItems() {
    const cartItems: CartItem[] = []
    Object.keys(this.cart).forEach(productId => {
      cartItems.push({
        productId: Number(productId),
        quantity: this.cart[Number(productId)],
      })
    })
    return cartItems
  },
  clear() {
    this.cart = {}
  },
})
