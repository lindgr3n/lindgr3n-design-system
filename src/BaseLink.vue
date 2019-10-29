<template>
  <component :is="type" class="base">
    <span :class="classObj">
      <slot></slot>
      <base-icon v-if="withArrow" icon="arrowright" />
    </span>
  </component>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
/**
 * Links can contains text and/or icons. Be careful using only icons, you must provide a text alternative via aria-label for accessibility.
 */
export default {
  components: {
    BaseIcon
  },
  props: {
    isButton: {
      type: Boolean,
      default: false
    },
    withArrow: {
      type: Boolean,
      default: false
    },
    inverse: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    tertiary: {
      type: Boolean,
      default: false
    },
    nochrome: {
      type: Boolean,
      default: false
    },
    containsIcon: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    type() {
      return this.isButton ? "button" : "a";
    },
    classObj() {
      return {
        arrow: this.withArrow,
        inverse: this.inverse,
        secondary: this.secondary,
        tertiary: this.tertiary,
        nochrome: this.nochrome,
        "contains-icon": this.containsIcon
      };
    }
  }
};
</script>

<style lang="stylus" scoped>
@import './shared/styles.styl';

button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.base {
  display: inline-block;
  transition: transform 150ms ease-out, color 150ms ease-out;
  text-decoration: none;
  color: $secondary;
}

.base:hover, .base:focus {
  cursor: pointer;
  transform: translateY(-1px);
  /* color: ${darken(0.07, color.secondary)}; */
}

.base:active {
  transform: translateY(0);
  /* color: ${darken(0.1, color.secondary)}; */
}

.base svg {
  display: inline-block;
  height: 1em;
  width: 1em;
  vertical-align: text-top;
  position: relative;
  bottom: -0.125em;
  margin-right: 0.4em;
}

.button {
  border: 0;
  border-radius: 0;
  background: none;
  padding: 0;
  font-size: inherit;
}

.arrow svg:last-of-type {
  height: 0.7em;
  width: 0.7em;
  margin-right: 0;
  margin-left: 0.25em;
  bottom: auto;
  vertical-align: inherit;
}

.contains-icon svg {
  height: 1em;
  width: 1em;
  vertical-align: middle;
  position: relative;
  bottom: 0;
  margin-right: 0;
}

.base .inverse {
  color: $lightest;
}

.base .inverse:hover {
  color: $lighter;
}

.base .inverse:active {
  color: $light;
}

.secondary {
  color: $mediumdark;

  &:hover {
    color: $dark;
  }

  &:active {
    color: $darker;
  }
}

.tertiary {
  color: $dark;

  &:hover {
    color: $darkest;
  }

  &:active {
    color: $mediumdark;
  }
}

.nochrome {
  color: inherit;

  &:hover, &:active {
    color: inherit;
    text-decoration: underline;
  }
}
</style>
