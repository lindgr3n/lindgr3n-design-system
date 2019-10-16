<template>
  <svg
    viewBox="0 0 1024 1024"
    width="20px"
    height="20px"
    :class="{ block: block }"
    :aria-hidden="ariaHidden"
    :aria-label="ariaLabel"
  >
    <path :d="icons[icon]" />
  </svg>
</template>

<script>
import { icons } from "./shared/icons";
export default {
  props: {
    icon: {
      type: String
    },
    block: {
      type: Boolean,
      default: false
    },
    ariaHidden: {
      type: Boolean,
      default: false
    },
    ariaLabel: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      icons: icons
    };
  }
};
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
}
svg.block {
  display: block;
}
</style>
