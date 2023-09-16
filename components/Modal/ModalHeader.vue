<template>
  <div class="header">
    <slot></slot>
    <ModalClose v-if="modal.isCloseButtonShowedRef.value" />
  </div>
</template>

<script setup lang="ts">
const modal = inject('modal')
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  padding: 8px 20px;
  position: relative;
}
</style>
