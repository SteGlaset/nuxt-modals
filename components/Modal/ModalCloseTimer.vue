<template>
  <div class="timer">
    <p class="timer-counter">{{ timer }}</p>
    <svg class="timer-circle">
      <circle class="timer-circle-underlay" r="13" cx="50%" cy="50%" stroke-linecap="round" fill="none"></circle>
      <circle class="timer-circle-icon" r="13" cx="50%" cy="50%" stroke-linecap="round" fill="none"
              :style="`animation-duration: ${modal.closeWaitRef.value}s`"></circle>
    </svg>
  </div>
</template>

<script setup lang="ts">
interface Props {
  timer: number;
}
const modal = inject('modal');
const {timer} = defineProps<Props>();
</script>

<style scoped lang="scss">
$dasharray: calc(2 * 3.14 * 13px);

.timer {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;

  &-counter {
    width: 100%;
    margin-block: 0;
    font-size: 1.2rem;
    color: $text-color-1;
    text-align: center;
    position: relative;
    z-index: $z-2;
  }

  &-circle {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    transform: rotateY(-180deg) rotateZ(-90deg);

    &-underlay {
      stroke-width: 3px;
      stroke: $background-color-2;
    }

    &-icon {
      stroke-dasharray: $dasharray;
      stroke-dashoffset: 0;
      stroke-width: 3px;
      stroke: $text-color-1;
      animation-name: countdown;
      animation-fill-mode: forwards;
      animation-timing-function: linear;
      position: relative;
      z-index: $z-1;
    }
  }
}

@keyframes countdown {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: $dasharray;
  }
}
</style>
