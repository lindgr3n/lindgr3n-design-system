import BaseButton from "./BaseButton.vue";
import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

const stories = storiesOf("Storybook Knobs", module);
stories.addDecorator(withKnobs);

export default { title: "Button" };

export const withText = () => ({
  components: { BaseButton },
  template: "<base-button>with text</base-button>"
});

export const withEmoji = () => ({
  components: { BaseButton },
  template: "<base-button>😀 😎 👍 💯</base-button>"
});

export const asAComponent = () => ({
  components: { BaseButton },
  template: '<base-button :rounded="true">rounded</base-button>'
});

/**
 * Using knobs
 */
export const dynamicInput = () => ({
  components: { BaseButton },
  props: {
    isDisabled: {
      default: boolean("Disabled", false)
    },
    text: {
      default: text("Text", "Hello Storybook")
    }
  },
  template: `<base-button :isDisabled="isDisabled">{{ text }}</base-button>`
});

dynamicInput.story = {
  decorators: [withKnobs]
};
