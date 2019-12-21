<template>
  <div
    :size="size"
    class="image"
    :class="classObjImage"
    :loading="loading"
    :src="src"
    :aria-busy="loading ? true : false"
  >
    <img v-if="src" :src="src" :alt="username" />
    <div
      v-else
      class="initial"
      :class="classObjInitial"
      :size="size"
      :aria-label="username"
      :aria-hidden="true"
    >
      {{ username.substring(0, 1) }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /**
     Use the loading state to indicate that the data Avatar needs is still loading. 
    */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     Avatar falls back to the user’s initial when no image is provided. Supply a `username` and omit `src` to see what this looks like.
    */
    username: {
      type: String,
      default: 'loading'
    },
    /**
     The URL of the Avatar's image.
    */
    src: {
      type: String,
      default: null
    },
    /**
     Avatar comes in four sizes. In most cases, you’ll be fine with `medium`. 
    */
    size: {
      type: String,
      default: 'medium'
    }
  },

  computed: {
    classObjInitial() {
      return {
        tiny: this.size === 'tiny',
        small: this.size === 'small',
        medium: this.size === 'medium',
        large: this.size === 'large'
        // arrow: this.withArrow,
        // inverse: this.inverse,
        // secondary: this.secondary,
        // tertiary: this.tertiary,
        // nochrome: this.nochrome,
        // "contains-icon": this.containsIcon
      };
    },
    classObjImage() {
      return {
        tiny: this.size === 'tiny',
        small: this.size === 'small',
        medium: this.size === 'medium',
        large: this.size === 'large',
        loading: this.loading
        // arrow: this.withArrow,
        // inverse: this.inverse,
        // secondary: this.secondary,
        // tertiary: this.tertiary,
        // nochrome: this.nochrome,
        // "contains-icon": this.containsIcon
      };
    }
  }
};
</script>

<style lang="stylus" scoped>
@import './shared/styles.styl';
@import './shared/global.styl';
@import './shared/animations.styl';

.initial {
  color: $color-lightest;
  text-align: center;
  font-size: $size-s2;
  line-height: $size-m1;
}

.initial.tiny {
  font-size: $typography-size-s1;
  line-height: $size-tiny;
}

.initial.medium {
  font-size: $size-s1;
  line-height: $size-small;
}

.initial.large {
  font-size: $size-s3;
  line-height: $size-large-l3;
}

.image {
  background: 'transparent';
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  text-transform: uppercase;
  height: $size-m1;
  width: $size-m1;
  line-height: $size-m1;
}

.image img {
  width: 100%;
  height: auto;
  display: block;
}

.image svg {
  position: relative;
  bottom: -2px;
  height: 100%;
  width: 100%;
  vertical-align: top;
}

// .image path {
// fill: $color-medium;
// animation: ${glow} 1.5s ease-in-out infinite;
// }
.glow {
  animation: $glow 1.5s ease-in-out infinite;
}

.image.loading {
  background: color-light;
}

.image.tiny {
  height: $size-tiny;
  width: $size-tiny;
  line-height: $size-tiny;
}

.image.small {
  height: $size-small;
  width: $size-small;
  line-height: $size-small;
}

.image.medium {
  height: $size-medium;
  width: $size-medium;
  line-height: $size-medium;
}

.image.large {
  height: $size-large;
  width: $size-large;
  line-height: $size-large;
}

.image.src.loading {
  background: '#37D5D3';
}
</style>
