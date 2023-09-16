<template>
  <p class="text">
    <slot></slot>
  </p>
</template>

<script setup lang="ts">
interface Props {
  align?: 'left' | 'center' | 'right' | 'justify';
  size?: string | number;
  color?: string;
}

const {align, size, color} = withDefaults(defineProps<Props>(), {
  align: 'left',
  size: '1.4rem',
  color: textColor2
})
</script>

<script lang="ts">
import scssVariables from '@/styles/export.module.scss'
const {textColor2} = scssVariables;
export default {};
</script>

<style scoped lang="scss">
.text {
  text-align: v-bind(align);
  font-size: v-bind(size);
  color: v-bind(color);
}
</style>
