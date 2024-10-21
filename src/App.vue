<script setup lang="ts">
import CartSection from './components/ProductCard/CartSection/CartSection.vue'
import OrderModal from './components/ProductCard/OrderModal/OrderModal.vue'
import ProductCard from './components/ProductCard/ProductCard.vue'
import { productsStore } from './stores/productsStore'
</script>

<template>
  <main
    class="p-8 flex flex-wrap gap-6 bg-rose-100 min-h-screen justify-center"
  >
    <section class="flex-grow-[2] flex flex-col gap-6">
      <h1 class="font-bold text-4xl">Desserts</h1>
      <section
        class="gap-6 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]"
      >
        <ProductCard
          v-for="product in productsStore.products"
          :key="product.name"
          :product="product"
        />
      </section>
    </section>
    <CartSection class="flex-1" />
    <OrderModal />
  </main>
</template>
