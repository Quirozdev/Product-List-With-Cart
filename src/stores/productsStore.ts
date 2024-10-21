import type Product from '@/types/product'
import { ref } from 'vue'
import data from '../data.json'

interface ProductsStore {
  readonly products: Product[]
  getProducts: () => Product[]
  getProductById: (id: Product['id']) => Product
}

export const productsStore = ref<ProductsStore>({
  products: data,
  getProducts() {
    return this.products
  },
  getProductById(productId) {
    return this.products.find(product => {
      return product.id === productId
    }) as Product
  },
})
