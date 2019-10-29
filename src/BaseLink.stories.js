import BaseLink from "./BaseLink.vue";
import BaseIcon from "./BaseIcon.vue";

export default {
  title: "Design System|Link",

  parameters: {
    component: BaseLink
  }
};

export const withText = () => ({
  components: { BaseLink },
  template: "<base-link>with text</base-link>"
});
export const isButton = () => ({
  components: { BaseLink },
  template: '<base-link :isButton="true">with text</base-link>'
});
export const withArrow = () => ({
  components: { BaseLink },
  template: '<base-link :withArrow="true">with arrow</base-link>'
});

export const all = () => ({
  components: {
    BaseLink,
    BaseIcon
  },
  template: `
    <div>
        <base-link href="https://learnstorybook.com">Default</base-link>
        <br />
        <base-link :secondary="true" href="https://learnstorybook.com">
            Secondary
        </base-link>
        <br />
        <base-link :tertiary="true" href="https://learnstorybook.com">
            tertiary
        </base-link>
        <br />
        <base-link :nochrome="true" href="https://learnstorybook.com">
            nochrome
        </base-link>
        <br />
        <base-link href="https://learnstorybook.com">
            <base-icon icon="discord" :aria-hidden="true" />
                With icon in front
            </base-link>
            <br />
            <base-link :contains-icon="true" href="https://learnstorybook.com" aria-label="Toggle side bar">
            <base-icon icon="sidebar" :aria-hidden="true" />
        </base-link>
        <br />
        <base-link :contains-icon="true" :with-arrow="true" href="https://learnstorybook.com">
            With arrow behind
        </base-link>
        <br />
        <span :style="{ background: '#333' }">
            <base-link :inverse="true" href="https://learnstorybook.com">
                Inverted colors
            </base-link>
        </span>
        <br />
        <base-link :is-button="true" onClick={onLinkClick}>
            is actually a button
        </base-link>
        <br />
    </div>`
});
