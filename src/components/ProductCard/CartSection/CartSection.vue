<script setup lang="ts">
import { cartStore } from '@/stores/cartStore'
import { computed } from 'vue'
import ProductRow from './ProductRow/ProductRow.vue'
import { productsStore } from '@/stores/productsStore'
import { formatPrice } from '@/utils/priceFormatter'
import { modalStore } from '@/stores/modalStore'

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
      <img src="./images/illustration-empty-cart.svg" alt="Empty Cart" />
      <p class="text-rose-500 font-semibold text-center px-8">
        Your added items will appear here
      </p>
    </div>
    <article v-else class="flex flex-col gap-4">
      <ProductRow
        v-for="cartItem in cartStore.getCartItems()"
        :key="cartItem.productId"
        :product-id="cartItem.productId"
        :quantity="cartItem.quantity"
      />
      <div class="flex justify-between">
        <p>Order Total</p>
        <p class="font-bold text-2xl text-rose-950">
          ${{ formatPrice(totalPrice) }}
        </p>
      </div>
      <div
        class="flex items-center gap-4 justify-center bg-rose-50 py-6 px-4 rounded-lg"
      >
        <img src="./images/icon-carbon-neutral.svg" alt="Carbon Neutral Icon" />
        <p>
          This is a
          <span class="font-semibold text-rose-950">carbon-neutral</span>
          delivery
        </p>
      </div>
      <button
        class="bg-red px-2 py-3 rounded-full text-rose-50 hover:bg-[#952d0d]"
        @click="modalStore.toggleModal()"
      >
        Confirm Order
      </button>
    </article>
  </aside>
</template>
