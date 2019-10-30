import BaseBadge from './BaseBadge.vue';
import BaseIcon from './BaseIcon.vue';

export default {
  title: 'Design System|Badge',
  component: BaseBadge
};

export const neutral = () => ({
  components: { BaseBadge },
  template: '<base-badge>neutral</base-badge>'
});
export const withIcon = () => ({
  components: { BaseBadge, BaseIcon },
  template:
    '<base-badge status="positive" ><base-icon icon="facehappy" :inline="true" /> with icon</base-badge>'
});

export const allBadges = () => ({
  components: { BaseBadge },
  template: `
    <div>
        <base-badge>neutral</base-badge>
        <base-badge status="positive" >positive</base-badge>
        <base-badge status="negative" >negative</base-badge>
        <base-badge status="error" >error</base-badge>
        <base-badge status="warning" >warning</base-badge>
    </div>`
});
