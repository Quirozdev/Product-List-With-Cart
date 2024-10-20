<script setup lang="ts">
import type { Product } from '@/types/product'

defineProps<{
  alt: Product['name']
  image: Omit<Product['image'], 'thumbnail'>
}>()
</script>

<template>
  <picture>
    <source media="(min-width: 1280px)" :srcset="`/images/${image.desktop}`" />
    <source media="(min-width: 768px)" :srcset="`/images/${image.tablet}`" />
    <img :src="`/images/${image.mobile}`" :alt="alt" class="rounded-lg" />
  </picture>
</template>
