<script setup lang="ts">
import { cartStore } from '@/stores/cartStore'
import type Product from '@/types/product'
import { computed } from 'vue'

const props = defineProps<{
  productId: Product['id']
}>()

const quantity = computed(() => {
  return cartStore.value.getProductQuantity(props.productId)
})
</script>

<template>
  <span
    class="bg-red rounded-3xl h-full bo flex items-center justify-around gap-2 text-white"
  >
    <button
      class="text-xs text-center rounded-full w-5 h-5 flex justify-center items-center border-white border-[1px] hover:text-red hover:bg-white"
      @click="
        () => {
          cartStore.changeProductQuantity(productId, -1)
        }
      "
    >
      -
    </button>
    <p>{{ quantity }}</p>
    <button
      class="text-xs text-center rounded-full w-5 h-5 flex justify-center items-center border-white border-[1px] hover:bg-white hover:text-red"
      @click="
        () => {
          cartStore.changeProductQuantity(productId, 1)
        }
      "
    >
      +
    </button>
  </span>
</template>
