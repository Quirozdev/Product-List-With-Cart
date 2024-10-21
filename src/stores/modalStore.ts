import { ref } from 'vue'

interface ModalStore {
  isVisible: boolean
  toggleModal: () => void
}

export const modalStore = ref<ModalStore>({
  isVisible: false,
  toggleModal() {
    this.isVisible = !this.isVisible
  },
})
