import { configure, addDecorator } from '@storybook/vue';
import { withA11y } from "@storybook/addon-a11y";
import '../src/shared/global.styl';  // Import our global style

addDecorator(withA11y);

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
