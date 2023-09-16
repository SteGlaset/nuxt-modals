<template>
  <div v-if="modal.isOpenedRef.value" @click.self="closeModal(modal)" class="modal-dialog">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ModalOptionsProp} from "~/types/types";
import closeModal from "~/helpers/Modal/closeModal";

interface Props {
  modal: ModalOptionsProp;
}

const {modal} = defineProps<Props>();
if (!modal) {
  throw new Error('Prop modal is not defined')
}

provide('modal', modal);
</script>

<style scoped lang="scss">
.modal-dialog {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  z-index: $z-100;
}

.modal-content {
  display: flex;
  flex-direction: column;
  width: 300px;
  min-height: 200px;
  background-color: $background-color-1;
  border-radius: 10px;
  border: $background-color-1 solid 2px;
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
}
</style>
