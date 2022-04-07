<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style lang="scss" scoped>
button {
  border: 1px black solid;
  border-radius: 15px;
  margin-top: 1.5rem;
  padding: 0.5rem 1.5rem;

  color: #fff;
  background-color: #830000;

  width: fit-content;
  min-height: 2rem;

  font-size: 1rem;

  cursor: pointer;

  &.group {
    &--left {
      border-right: none;
      border-radius: 15px 0 0 15px;
    }
    &--center {
      border-right: none;
      border-left: none;
      border-radius: 0;
    }
    &--right {
      border-left: none;
      border-radius: 0 15px 15px 0;
    }
  }

  &.pushed {
    background-color: #b36565;
  }
}
</style>