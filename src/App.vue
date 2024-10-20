<script setup lang="ts">
import ProductCard from './components/ProductCard/ProductCard.vue'
import data from './data.json'
import type { Product } from './types/product'

console.log(data)

const products: Product[] = data
</script>

<template>
  <main class="p-8 flex flex-col gap-4">
    <h1 class="font-bold text-4xl">Desserts</h1>
    <section class="gap-6 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
      <ProductCard
        v-for="product in products"
        :key="product.name"
        :product="product"
      />
    </section>
  </main>
</template>
