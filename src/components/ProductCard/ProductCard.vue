<script setup lang="ts">
import type Product from '@/types/product'
import { formatPrice } from '@/utils/priceFormatter'
import ProductImage from './ProductImage/ProductImage.vue'
import AddToCardButton from './AddToCardButton/AddToCardButton.vue'

defineProps<{
  product: Product
}>()
</script>

<template>
  <article class="flex flex-col gap-8">
    <div class="relative flex justify-center">
      <ProductImage :image="product.image" :alt="product.name" />
      <AddToCardButton :product-id="product.id" />
    </div>
    <div>
      <p class="text-rose-400">{{ product.category }}</p>
      <p class="font-semibold">{{ product.name }}</p>
      <p class="font-semibold text-red">${{ formatPrice(product.price) }}</p>
    </div>
  </article>
</template>
