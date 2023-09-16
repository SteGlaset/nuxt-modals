<template>
  <div class="wrapper">
    <ModalCloseTimer v-if="timer" :timer="timer"/>
    <ModalCloseButton v-else/>
  </div>
</template>

<script setup lang="ts">
const modal = inject('modal');
const [timer] = useTimer(modal.closeWaitRef.value);

const initialCloseable = modal.isCloseableRef.value;
watch(timer, time => {
  if (time > 0) {
    modal.isCloseableRef.value = false;
    return;
  }
  modal.isCloseableRef.value = initialCloseable;
})
</script>

<style scoped lang="scss">
$wrapper-size: 30px;

.wrapper {
  width: $wrapper-size;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 8px;
}
</style>
