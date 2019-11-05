<template>
  <button @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
/**
 * Base button
 */
export default {
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
};
</script>

<style lang="scss" scoped></style>
