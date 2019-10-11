import BaseButton from "./BaseButton.vue";

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
