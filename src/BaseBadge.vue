<template>
  <div class="base" :class="statusClass">
    <slot></slot>
  </div>
</template>

<script>
/**
 * Basic badges
 */
export default {
  props: {
    /**
     * One of "positive", "negative", "neutral", "error", "warning"
     */
    status: {
      type: String,
      default: 'neutral',
      validator: function(value) {
        // The value must match one of these strings
        return (
          ['positive', 'negative', 'neutral', 'error', 'warning'].indexOf(
            value
          ) !== -1
        );
      }
    }
  },
  computed: {
    statusClass() {
      return this.status;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import './shared/styles.styl';

.base {
  display: inline-block;
  vertical-align: top;
  font-size: 11px;
  line-height: 12px;
  padding: 4px 12px;
  border-radius: 3em;
  font-weight: $weight-bold;

  svg {
    height: 12px;
    width: 12px;
    margin-right: 4px;
    margin-top: -2px;
  }
}

.positive {
  color: $positive;
  background: $background-positive;
}

.negative {
  color: $negative;
  background: $background-negative;
}

.warning {
  color: $warning;
  background: $background-warning;
}

.error {
  color: $lightest;
  background: $negative;
}

.neutral {
  color: $dark;
  background: $mediumlight;
}
</style>
