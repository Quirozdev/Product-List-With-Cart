<script setup lang="ts">
import { cartStore } from '@/stores/cartStore'
import { computed } from 'vue'
import ProductRow from './ProductRow/ProductRow.vue'
import { productsStore } from '@/stores/productsStore'
import { formatPrice } from '@/utils/priceFormatter'

const totalProducts = computed(() => {
  return cartStore.value.getTotalProducts()
})

const totalPrice = computed(() => {
  return cartStore.value.getCartItems().reduce((acc, curr) => {
    return (
      acc +
      productsStore.value.getProductById(curr.productId).price * curr.quantity
    )
  }, 0)
})
</script>

<template>
  <aside class="min-w-72 bg-white p-6 self-start rounded-lg flex flex-col">
    <h2 class="text-2xl text-red font-bold self-start">
      Your Cart ({{ totalProducts }})
    </h2>
    <div v-if="totalProducts === 0" class="flex flex-col items-center">
      <img src="/public/images/illustration-empty-cart.svg" alt="Empty Cart" />
      <p class="text-rose-500 font-semibold text-center px-8">
        Your added items will appear here
      </p>
    </div>
    <article v-else>
      <ProductRow
        v-for="cartItem in cartStore.getCartItems()"
        :key="cartItem.productId"
        :product-id="cartItem.productId"
        :quantity="cartItem.quantity"
      />
      <div class="flex justify-between pt-4">
        <p>Order Total</p>
        <p class="font-bold text-2xl text-rose-900">
          ${{ formatPrice(totalPrice) }}
        </p>
      </div>
    </article>
  </aside>
</template>
