<script setup lang="ts">
import type { Product } from '@/types/product'
import { formatPrice } from '@/utils/priceFormatter'
import ProductImage from './ProductImage/ProductImage.vue'
import { useTemplateRef } from 'vue'

defineProps<{
  product: Product
}>()

const button = useTemplateRef('button')
</script>

<template>
  <article class="flex flex-col gap-8">
    <div class="relative flex justify-center">
      <ProductImage :image="product.image" :alt="product.name" />
      <button
        ref="button"
        class="absolute bg-white flex justify-center gap-2 rounded-3xl border-rose-300 border-[1px] px-4 py-2"
        :style="{ bottom: `-${(button?.offsetHeight as number) / 2}px` }"
      >
        <img src="/images/icon-add-to-cart.svg" alt="Cart Icon" />
        <span class="font-semibold text-sm">Add to cart</span>
      </button>
    </div>
    <div>
      <p class="text-rose-400">{{ product.category }}</p>
      <p class="font-semibold">{{ product.name }}</p>
      <p class="font-semibold text-red">${{ formatPrice(product.price) }}</p>
    </div>
  </article>
</template>
