<template>
  <input class="input" v-bind="props" :width="props.width">
</template>

<script setup lang="ts">
interface Props {
  width?: string;
}

const props = withDefaults(defineProps<Props>(), {
  width: 'auto',
});
</script>

<style lang="scss">
.input {
  width: v-bind('props.width');
  padding: 8px;
  background: $background-color-1;
  border: none;
  border-radius: 10px;
  color: lighten($color-disabled, 15);
  font-size: 1.6rem;
  &::placeholder {
    color: lighten($color-disabled, 15);
  }
  &:focus-visible {
    outline: 1px solid $text-color-1;
    color: $text-color-3;
  }
}
</style>
