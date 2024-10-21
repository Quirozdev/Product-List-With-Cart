<script setup lang="ts">
import { productsStore } from '@/stores/productsStore'
import type { CartItem } from '@/types/cart'
import { formatPrice } from '@/utils/priceFormatter'
import { computed } from 'vue'
import RemoveIcon from '../../icons/RemoveIcon.vue'
import { cartStore } from '@/stores/cartStore'

type Props = CartItem

const props = defineProps<Props>()

const product = computed(() => {
  return productsStore.value.getProductById(props.productId)
})

const totalPrice = computed(() => {
  return product.value.price * props.quantity
})
</script>

<template>
  <div class="border-b-[1px] py-4 flex gap-4 justify-between items-start">
    <div class="flex flex-col gap-1">
      <p class="font-semibold text-rose-950">{{ product.name }}</p>
      <div class="flex gap-4 items-center">
        <p class="text-red font-semibold">{{ quantity }}x</p>
        <p class="text-rose-400">@ ${{ formatPrice(product.price) }}</p>
        <p class="text-rose-500 font-semibold">
          ${{ formatPrice(totalPrice) }}
        </p>
      </div>
    </div>
    <button
      class="hover:border-black hover:text-black text-rose-400 rounded-full border-[1px] p-1 border-rose-400"
      @click="cartStore.removeProduct(productId)"
    >
      <RemoveIcon />
    </button>
  </div>
</template>
