import { configure, addParameters, addDecorator } from '@storybook/vue';
import { withA11y } from "@storybook/addon-a11y";
import '../src/shared/global.styl';  // Import our global style

addDecorator(withA11y);

addParameters({
    options: {
        hierarchyRootSeparator: /\|/,
    },
    docs: {
        // https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/docspage.md#inline-stories-vs-iframe-stories
        inlineStories: true,
        // iframeHeight: '60px',
    },
});

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
