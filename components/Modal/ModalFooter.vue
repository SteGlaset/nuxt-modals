<template>
  <div class="footer">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
interface Props {
  justifyContent?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly',
  gap?: string
}

const {justifyContent, gap} = withDefaults(defineProps<Props>(), {
  justifyItems: 'start',
  gap: '0'
})
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  width: 100%;
  padding: 10px 20px;
  justify-content: v-bind(justifyContent);
  gap: v-bind(gap);
}
</style>

