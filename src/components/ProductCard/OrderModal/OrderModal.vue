<script setup lang="ts">
import { cartStore } from '@/stores/cartStore'
import { modalStore } from '@/stores/modalStore'
import { productsStore } from '@/stores/productsStore'
import { formatPrice } from '@/utils/priceFormatter'
import { computed } from 'vue'

const productsWithQuantities = computed(() => {
  return cartStore.value.getCartItems().map(cartItem => {
    return {
      product: productsStore.value.getProductById(cartItem.productId),
      quantity: cartItem.quantity,
    }
  })
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
  <div
    v-if="modalStore.isVisible"
    class="fixed w-full min-h-screen top-0 grid place-items-center"
  >
    <!-- Overlay -->
    <div
      class="bg-black fixed w-full h-full opacity-40"
      @click="modalStore.toggleModal()"
    ></div>
    <div class="bg-rose-50 fixed flex flex-col gap-4 p-8">
      <img
        src="/images/icon-order-confirmed.svg"
        alt="Order Confirmed Icon"
        class="w-12 h-12"
      />
      <div>
        <h3 class="text-rose-950 text-3xl font-bold">Order Confirmed</h3>
        <p class="text-sm text-rose-500">We hope you enjoy your food!</p>
      </div>
      <div
        class="flex flex-col max-h-60 overflow-y-scroll rounded-lg bg-rose-100 gap-4 p-6"
      >
        <div
          v-for="cartItem in productsWithQuantities"
          :key="cartItem.product.id"
          class="flex items-center justify-between border-b"
        >
          <div class="flex gap-4 pb-2">
            <img
              :src="`./images/${cartItem.product.image.thumbnail}`"
              :alt="cartItem.product.name"
              class="w-12 h-12 rounded-lg hidden sm:block"
            />
            <div class="flex flex-col gap-2">
              <p class="font-semibold text-rose-950">
                {{ cartItem.product.name }}
              </p>
              <div class="flex gap-4 items-center">
                <p class="text-red font-semibold text-sm">
                  {{ cartItem.quantity }}x
                </p>
                <p class="text-rose-400 text-sm">
                  @ ${{ formatPrice(cartItem.product.price) }}
                </p>
              </div>
            </div>
          </div>
          <p class="pl-8 font-bold text-rose-950">
            ${{ formatPrice(cartItem.quantity * cartItem.product.price) }}
          </p>
        </div>
        <div class="flex justify-between items-center">
          <p>Order Total</p>
          <p class="text-xl text-rose-950 font-bold">
            ${{ formatPrice(totalPrice) }}
          </p>
        </div>
      </div>
      <button
        class="bg-red px-2 py-3 rounded-full text-rose-50 hover:bg-[#952d0d]"
        @click="
          () => {
            cartStore.clear()
            modalStore.toggleModal()
          }
        "
      >
        Start New Order
      </button>
    </div>
  </div>
</template>
