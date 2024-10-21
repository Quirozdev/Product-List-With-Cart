<script setup lang="ts">
import { computed, ref, useTemplateRef } from 'vue'
import HoveredVariation from './Variatons/HoveredVariation.vue'
import DefaultVariation from './Variatons/DefaultVariation.vue'
import type Product from '@/types/product'
import { cartStore } from '@/stores/cartStore'

const props = defineProps<{
  productId: Product['id']
}>()

const button = useTemplateRef('button')

const isBeingHovered = ref(false)

const isVariant = computed(() => {
  return (
    isBeingHovered.value && cartStore.value.isProductInCart(props.productId)
  )
})

const childComponent = computed(() => {
  return isVariant.value ? HoveredVariation : DefaultVariation
})
</script>

<template>
  <button
    ref="button"
    class="w-36 h-10 absolute bg-white rounded-3xl border-rose-300 border-[1px]"
    :style="{ bottom: `-${(button?.offsetHeight as number) / 2}px` }"
    v-on:focus="isBeingHovered = true"
    v-on:pointerenter="isBeingHovered = true"
    v-on:pointerleave="isBeingHovered = false"
    @click="
      () => {
        cartStore.changeProductQuantity(productId)
      }
    "
    :disabled="isVariant"
  >
    <component :is="childComponent" :productId="productId"></component>
  </button>
</template>
