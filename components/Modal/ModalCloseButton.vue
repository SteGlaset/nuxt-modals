<template>
  <button class="button" @click="closeModal(modal)" :disabled="!modal.isCloseableRef.value">
    <svg class="close-icon" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 365.696 365.696"
         xml:space="preserve"><g><path class="path" d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"></path></g></svg>
  </button>
</template>

<script setup lang="ts">
import closeModal from "~/helpers/Modal/closeModal";

const modal = inject('modal');
</script>

<style scoped lang="scss">
.button {
  border: none;
  background: none;
  padding: 0;

  &:focus-visible {
    border: none;
    outline: none;
  }

  &:not(:disabled) {
    &:hover {
      cursor: pointer;
      .path {
        fill: $color-error;
      }
    }

    &:active {
      transform: scale(.94)
    }
  }

  &:disabled .path {
    fill: $color-disabled;
  }
}



.close-icon {
  width: 18px;
  height: 18px;
}

.path {
  fill: $text-color-1;
  transition: fill .1s;
}
</style>
