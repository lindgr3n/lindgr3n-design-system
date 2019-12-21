import BaseAvatar from './BaseAvatar.vue';
import BaseIcon from './BaseIcon.vue';
import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

const stories = storiesOf('Storybook Knobs', module);
stories.addDecorator(withKnobs);

export default {
  title: 'Design System|Avatar',
  component: BaseAvatar
};

export const standard = () => ({
  components: { BaseAvatar, BaseIcon },
  template:
    '<base-avatar size="large" username="Tom Coleman" src="https://avatars2.githubusercontent.com/u/24882614" ></base-avatar>'
});

export const sizes = () => ({
  components: { BaseAvatar },
  template: `
    <div>
        <base-avatar size="large" username="Johan Lindgren" src="https://avatars2.githubusercontent.com/u/24882614" />
        <base-avatar size="medium" username="Johan Lindgren" src="https://avatars2.githubusercontent.com/u/24882614" />
        <base-avatar size="small" username="Johan Lindgren" src="https://avatars2.githubusercontent.com/u/24882614" />
        <base-avatar size="tiny" username="Johan Lindgren" src="https://avatars2.githubusercontent.com/u/24882614"/>
    </div>`
});

export const initials = () => ({
  components: { BaseAvatar },
  template: `
    <div>
        <base-avatar username="Johan Lindgren" />
        <base-avatar username="Johan Lindgren" />
        <base-avatar username="Johan Lindgren" />
        <base-avatar username="Johan Lindgren" />
    </div>`
});

export const loading = () => ({
  components: { BaseAvatar },
  template: `
      <div>
          <base-avatar size="large" :loading="true" />
          <base-avatar size="medium" loading />
          <base-avatar size="small" loading />
          <base-avatar size="tiny" loading />
      </div>`
});

/**
 * Using knobs
 */
export const dynamicInput = () => ({
  components: { BaseAvatar },
  props: {
    loading: {
      default: boolean('Loading', false)
    },
    size: {
      default: select('Size', ['tiny', 'small', 'medium', 'large'])
    },
    username: {
      default: text('username', 'Johan Lindgren')
    },
    src: {
      default: text('src', 'https://avatars2.githubusercontent.com/u/24882614')
    }
  },
  template:
    '<base-avatar :loading="loading" :size="size" :username="username" :src="src" />'
});

dynamicInput.story = {
  decorators: [withKnobs]
};
