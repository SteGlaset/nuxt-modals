<template>
  <button class="button" :class="`button-${variant}`" :disabled="isDisabled">
    <div class="slot">
      <slot></slot>
    </div>
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'success' | 'error' | 'info' | 'disabled';
  isDisabled?: boolean;
}

const {color} = withDefaults(defineProps<Props>(), {
  variant: 'disabled',
  isDisabled: false
});
</script>

<style scoped lang="scss">
$border-width: 2px;

@mixin colorize-button($color) {
  &::after {
    background: radial-gradient(closest-corner,
        darken($color, 13),
        $color 65%,
        lighten($color, 15) 90%,
        lighten($color, 40) 100%);
  }

  &:not(:disabled) {
    box-shadow: 0 0 8px $color;

    &:hover {
      box-shadow: 0 0 8px lighten($color, 10);
      border: $border-width solid lighten($color, 10);

      &::after {
        opacity: 0;
      }
    }
  }
}

.button {
  color: #fff;
  background: transparent;
  border: $border-width solid transparent;
  border-radius: 10px;
  padding: 8px 20px;
  font-size: 1.4rem;
  font-weight: 600;
  position: relative;
  transition: border-color .2s;

  &:not(:disabled):hover {
    cursor: pointer;
  }

  &::after {
    content: '';
    display: block;
    width: calc(100% + $border-width * 2);
    height: calc(100% + $border-width * 2);
    border-radius: 10px;
    z-index: $z-1;
    position: absolute;
    top: -$border-width;
    left: -$border-width;
    opacity: 1;
    transition: opacity .2s;
  }

  &-success {
    @include colorize-button($color-success);
  }

  &-error {
    @include colorize-button($color-error);
  }

  &-info {
    @include colorize-button($color-info);
  }

  &-disabled {
    @include colorize-button($color-disabled);
  }

  &:disabled {
    @include colorize-button($color-disabled);
    color: lighten($color-disabled, 40);
  }
}

.slot {
  position: relative;
  z-index: $z-2;
}
</style>
